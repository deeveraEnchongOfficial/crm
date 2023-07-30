<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Repositories\UserRepository;
use App\Http\Requests\RegisterUserRequest;
use App\Notifications\UserVerificationNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;
use App\Http\Requests\UserRegisterRequest;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    public function createUser(Request $request)
    {
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'remember_token' => Str::random(10), // Generate a verification token
            ];

            $user = $this->userRepository->create($data);

            $url = URL::temporarySignedRoute(
                'verify.user',
                now()->addMinutes(60), // Expiration time for the signed URL
                ['email' => $user->email, 'remember_token' => $data['remember_token']],
            );

            // Send email verification notification
            Notification::route('mail', $user->email)
                ->notify(new UserVerificationNotification($url));

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken('API TOKEN')->plainTextToken,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function verifyUser(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid verification token.',
            ], 400);
        }

        // Check if the remember_token matches the request token
        if ($user->remember_token !== $request->remember_token) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid verification token.',
            ], 400);
        }

        // Update the user's verification status
        $user->email_verified_at = now();
        $user->remember_token = Str::random(10);
        $user->save();

        // Redirect to the login page
        return Redirect::away(Config::get('app.redirect_url'));
    }

    /**
     * Login The User
     *
     * @param  \App\Http\Requests\LoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function loginUser(LoginRequest $request)
    {
        try {
            $credentials = $request->only(['email', 'password']);

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password do not match with our records.',
                ], 401);
            }

            $user = $this->userRepository->findByEmail($request->email);

            if ($user->email_verified_at === null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Email is not verified.',
                ], 401);
            }

            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'token' => $user->createToken('API TOKEN')->plainTextToken,
                'role' => $user->role, // Include the role in the response
            ], 200)->withCookie(Cookie::make('XSRF-TOKEN', $request->session()->token()));
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * Logout The User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logoutUser(Request $request)
    {
        try {
            // Retrieve the authenticated user instance
            $user = $request->user();

            // Revoke the current user's token
            $this->userRepository->revokeTokens($user);

            return response()->json([
                'status' => true,
                'message' => 'User Logged Out Successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function getCurrentUser()
    {
        $user = Auth::user();

        if ($user) {
            // User is logged in
            return response()->json([
                'user' => $user,
            ]);
        } else {
            // User is not logged in
            return response()->json([
                'message' => 'User not logged in',
            ], 401);
        }
    }

    public function updateUser(Request $request)
    {
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:users,email,' . $request->user()->id,
                'role' => 'nullable|numeric',
                'password' => 'nullable',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validator->errors(),
                ], 401);
            }

            $user = $request->user();

            $data = [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
            ];

            if ($request->filled('role')) {
                $data['role'] = $request->input('role');
            }

            if ($request->filled('password')) {
                $data['password'] = Hash::make($request->input('password'));
            }

            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $data['image'] = $file->get();
            }

            $updatedUser = $this->userRepository->update($user, $data);

            return response()->json([
                'status' => true,
                'message' => 'User Updated Successfully',
                'user' => $updatedUser,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
