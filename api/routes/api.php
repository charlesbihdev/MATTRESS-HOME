<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/products', [ProductController::class, 'store'])->middleware('auth');

Route::delete('/products/{id}', [ProductController::class, 'destroy'])->middleware('auth');

Route::post('/products/{id}', [ProductController::class, 'update']);


Route::get('/products/{product}/size/{size}', [ProductController::class, 'showWithPrice']);

Route::get('/products/sizes', [ProductController::class, 'showWithSizesAndPrices'])->middleware('auth');

Route::get('/products/limit/{limit}', [ProductController::class, 'getProductsWithLimit']);

Route::get('/products/search/{query}', [ProductController::class, 'searchProduct']);

Route::get('/products/{product}', [ProductController::class, 'show']);


Route::get('/products', [ProductController::class, 'index']);

Route::get('/categories', [ProductController::class, 'getCategories']);

Route::get('/payments', [ProductController::class, 'showPayment'])->middleware('auth');

Route::post('/payments', [ProductController::class, 'createPayment'])->middleware('auth');
