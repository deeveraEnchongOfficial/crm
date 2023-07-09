<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Repositories\UserRepository;

class AuthController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Create User
     *
     * @return User
     */
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make(
                $request->all(),
                [
                    'name' => 'required',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required',
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors(),
                ], 401);
            }

            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ];

            $user = $this->userRepository->create($data);

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

    /**
     * Login The User
     *
     * @return User
     */
    public function loginUser(Request $request)
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
}
