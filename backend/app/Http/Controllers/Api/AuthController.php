<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Notifications\UserVerificationNotification;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Repositories\UserRepository;
use App\Models\User;

class AuthController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    public function createUser(UserRegisterRequest $request)
    {
        try {
            $data = [
                'first_name' => $request->first_name,
                'middle_name' => $request->middle_name,
                'last_name' => $request->last_name,
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
        $email = $request->query('email');
        $rememberToken = $request->query('remember_token');

        if (!$email || !$rememberToken) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid verification token.',
            ], 400);
        }

        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found.',
            ], 404);
        }

        // Check if the remember_token matches the request token
        if (!hash_equals($user->remember_token, $rememberToken)) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid verification token.',
            ], 400);
        }

        // Check if the user is already verified
        if ($user->email_verified_at !== null) {
            return response()->json([
                'status' => false,
                'message' => 'User already verified.',
            ], 400);
        }

        // Update the user's verification status
        $user->email_verified_at = now();
        $user->remember_token = Str::random(10);
        $user->save();

        // Redirect to the login page (you can customize the redirect URL in your .env file)
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

    public function updateOwner(Request $request)
    {
        try {
            // Validate the request data
            $validator = Validator::make($request->all(), [
                'first_name' => 'required|string|max:255',
                'middle_name' => 'nullable',
                'last_name' => 'required|string|max:255',
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
                'first_name' => $request->input('first_name'),
                'middle_name' => $request->input('middle_name'),
                'last_name' => $request->input('last_name'),
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
}
