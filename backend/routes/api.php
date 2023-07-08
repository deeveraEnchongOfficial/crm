<?php

use App\Http\Controllers\Api\AuthController;
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
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
Route::post('/auth/logout', [AuthController::class, 'logoutUser'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'getCurrentUser'])->middleware('auth:sanctum');

// Route::middleware('auth:sanctum')->group(function () {
//     Route::apiResource('/inquiries', InquiriesController::class);
//     Route::apiResource('/contacts', ContactsController::class);
// });

// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');

// Route::apiResource('/inquiries', InquiriesController::class);


Route::middleware(['auth:sanctum', 'role:' . User::ROLE_ADMIN])->group(function () {
    // Admin routes
    Route::apiResource('/inquiries', InquiriesController::class);
    Route::apiResource('/contacts', ContactsController::class);
    Route::resource('/inventories', InventoryController::class);
    Route::post('/inventories/purchase', [InventoryController::class, 'purchase']);
    Route::resource('/purchased', PurchasedController::class);
    Route::post('/purchased/process', [PurchasedController::class, 'processPurchasedItems']);
});

Route::middleware(['auth:sanctum', 'role:' . User::ROLE_USER])->group(function () {
    // Editor and Author routes
    // Route::apiResource('/contacts', ContactsController::class);
});
