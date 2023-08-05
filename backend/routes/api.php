<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ContactsController;
use App\Http\Controllers\Api\InquiriesController;
use App\Http\Controllers\Api\InventoryController;
use App\Http\Controllers\Api\PurchasedController;
use Illuminate\Support\Facades\Route;
use App\Models\User;

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
Route::middleware(['convert.snake.case'])->group(function () {
    Route::post('/auth/register', [AuthController::class, 'createUser'])->middleware('convert.snake.case');
    Route::get('/auth/verify', [AuthController::class, 'verifyUser'])->name('verify.user');
    Route::post('/auth/login', [AuthController::class, 'loginUser']);
    Route::post('/auth/logout', [AuthController::class, 'logoutUser'])->middleware('auth:sanctum');
    Route::get('/owner', [AuthController::class, 'getCurrentUser'])->middleware('auth:sanctum');
    Route::post('/owner/update', [AuthController::class, 'updateOwner'])->middleware('auth:sanctum');
});

Route::middleware(['convert.snake.case', 'auth:sanctum', 'role:' . User::ROLE_ADMIN])->group(function () {
    // Admin routes
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/inquiries', InquiriesController::class);
    Route::apiResource('/contacts', ContactsController::class);
    Route::apiResource('/inventories', InventoryController::class);
    Route::post('/inventories/purchase', [InventoryController::class, 'purchase']);
    Route::apiResource('/purchased', PurchasedController::class);
    Route::post('/purchased/process', [PurchasedController::class, 'processPurchasedItems']);
});

Route::middleware(['convert.snake.case', 'auth:sanctum', 'role:' . User::ROLE_USER])->group(function () {
    // Editor and Author routes
    // Route::apiResource('/contacts', ContactsController::class);
});
