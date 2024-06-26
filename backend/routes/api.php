<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContactsController;
use App\Http\Controllers\Api\InquiriesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
Route::post('/auth/logout', [AuthController::class, 'logoutUser'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'getCurrentUser'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/inquiries', InquiriesController::class);
    Route::apiResource('/contacts', ContactsController::class);
});

// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');

// Route::apiResource('/inquiries', InquiriesController::class);
