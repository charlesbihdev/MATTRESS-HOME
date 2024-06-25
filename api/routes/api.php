<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Fetch all products
Route::get('/products', [ProductController::class, 'index']);

Route::get('/products/{product}/size/{size}', [ProductController::class, 'showWithPrice']);

Route::get('/products/{product}', [ProductController::class, 'show']);

Route::get('/categories', [ProductController::class, 'getCategories']);
