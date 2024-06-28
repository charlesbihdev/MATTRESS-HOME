<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Price;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\ProductPicture;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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
            },

        ])->get();

        return response()->json(['products' => $products]);
    }


    public function store(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'stars' => 'required|integer',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'ks' => 'required|numeric',
            'qd' => 'required|numeric',
            'ld' => 'required|numeric',
            'md' => 'required|numeric',
            'sd' => 'required|numeric',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create new product
        $product = new Product();
        $product->name = $request->name;
        $product->stars = $request->stars;
        $product->category_id = $request->category_id;
        $product->description = $request->description;
        $product->save();

        // Save prices
        $prices = [
            ['size' => 'ks', 'price' => $request->ks],
            ['size' => 'qd', 'price' => $request->qd],
            ['size' => 'ld', 'price' => $request->ld],
            ['size' => 'md', 'price' => $request->md],
            ['size' => 'sd', 'price' => $request->sd],
        ];

        foreach ($prices as $price) {
            $sizeId = Size::where('name', $price['size'])->value('id');
            if ($sizeId) {
                $product->prices()->create([
                    'size_id' => $sizeId,
                    'price' => $price['price'],
                ]);
            }
        }

        // Save product pictures
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->move(public_path('images'), $imageName);

                $productPicture = new ProductPicture();
                $productPicture->product_id = $product->id;
                $productPicture->image_path = 'images/' . $imageName;
                $productPicture->save();
            }
        }

        return response()->json(['message' => 'Product added successfully'], 201);
    }
    public function showWithSizesAndPrices()
    {
        $products = Product::with([
            'prices' => function ($query) {
                $query->orderBy('size_id');
            },
            'prices.size',
            'pictures' => function ($query) {
                $query->orderBy('id', 'asc'); // Fetch the first image
            },

        ])->get();

        return response()->json(['products' => $products]);
    }


    // get products with limit 
    public function getProductsWithLimit($limit)
    {
        // Fetch products with a limit
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
                $query->orderBy('id', 'asc')->limit(1);
            },
            'category'
        ])->limit($limit)->get();

        return response()->json(['products' => $products]);
    }

    // Fetch a specific product by product_id
    public function show(Product $product)
    {
        // Load sizes and prices related to the product
        $product->load('sizes');
        $product->load('pictures');
        // $product->load('category');


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
                'category' => $product->category,
                'description' => $product->description,
                'size' => $size->name,
                'price' => $price,
                'images' => $product->pictures,

            ],
        ]);
    }

    public function getCategories()
    {
        // Fetch all categories
        $categories = Category::all();
        return response()->json(['categories' => $categories]);
    }
}
