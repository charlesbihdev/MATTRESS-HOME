<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    // Fetch all products
    public function index()
    {

        $products = Product::with([
            'prices' => function ($query) {
                $query->whereIn('size_id', function ($subQuery) {
                    $subQuery->select('id')
                        ->from('sizes')
                        ->orderBy('id', 'asc')
                        ->limit(1)
                        ->union(
                            DB::table('sizes')
                                ->select('id')
                                ->orderBy('id', 'desc')
                                ->limit(1)
                        );
                });
            },
            'prices.size',
            'pictures' => function ($query) {
                $query->orderBy('id', 'asc')->limit(1); // Fetch the first image
            }
        ])->get();

        return response()->json(['products' => $products]);
    }

    // Fetch a specific product by product_id
    public function show(Product $product)
    {
        // Load sizes and prices related to the product
        $product->load('sizes');
        $product->load('pictures');

        return response()->json(['product' => $product]);
    }

    public function showWithPrice(Product $product, Size $size)
    {
        // Retrieve the price for the given product_id and size_id
        $price = $product->sizes()->where('sizes.id', $size->id)->first()->pivot->price;

        // Return product details along with the price
        return response()->json([
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'size' => $size->name,
                'price' => $price,
                'images' => $product->pictures,

            ],
        ]);
    }
}
