<?php

namespace App\Http\Controllers;

use App\Models\Size;
use App\Models\Payment;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\ProductPicture;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    // Fetch all products
    public function index()
    {
        // Fetch products with prices and related details
        $products = Product::with([
            'prices' => function ($query) {
                // Subquery to get min and max size_id
                $minSizeId = DB::table('sizes')->select('id')->orderBy('id', 'asc')->limit(1)->first()->id;
                $maxSizeId = DB::table('sizes')->select('id')->orderBy('id', 'desc')->limit(1)->first()->id;

                // Fetch prices using whereIn with both min and max size_id
                $query->whereIn('size_id', [$minSizeId, $maxSizeId]);
            },
            'prices.size',
            'pictures' => function ($query) {
                $query->orderBy('id', 'asc')->limit(1); // Fetch the first image
            },
        ])
            // ->orderBy('id', 'desc')
            ->inRandomOrder()
            ->get();

        return response()->json(['products' => $products]);
    }


    public function searchProduct($query)
    {
        $products = Product::with([
            'prices' => function ($query) {
                // Subquery to get min and max size_id
                $minSizeId = DB::table('sizes')->select('id')->orderBy('id', 'asc')->limit(1)->first()->id;
                $maxSizeId = DB::table('sizes')->select('id')->orderBy('id', 'desc')->limit(1)->first()->id;

                // Fetch prices using whereIn with both min and max size_id
                $query->whereIn('size_id', [$minSizeId, $maxSizeId]);
            },
            'prices.size',
            'pictures' => function ($query) {
                $query->orderBy('id', 'asc')->limit(1); // Fetch the first image
            },
        ])
            ->where('name', 'like', '%' . $query . '%')
            ->orWhere('description', 'like', '%' . $query . '%')
            ->orderBy('id', 'desc')
            ->get();

        return response()->json(['products' => $products]);
    }
    public function showPayment()
    {
        // Fetch all payments (you can modify this based on your requirements)
        $payments = Payment::all();

        // Return view or JSON response
        return response()->json($payments);
    }

    public function CreatePayment(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'customer_name' => 'nullable|string|max:255',
            'customer_email' => 'required|email|max:255',
            'customer_phone' => 'nullable|string|max:20',
            'customer_address' => 'nullable|string|max:255',
            'customer_region' => 'nullable|string|max:255',
            'customer_city' => 'nullable|string|max:255',
            'currency' => 'required|string|max:10',
            'amount' => 'required|integer',
        ]);

        // Create the payment record
        $payment = Payment::create([
            'reference' => now()->timestamp,
            'customer_name' => $validated['customer_name'],
            'customer_email' => $validated['customer_email'],
            'customer_phone' => $validated['customer_phone'],
            'customer_address' => $validated['customer_address'],
            'customer_region' => $validated['customer_region'],
            'customer_city' => $validated['customer_city'],
            'currency' => $validated['currency'],
            'amount' => $validated['amount'],
            'status' => 'pending', // or any other default status
        ]);

        // Return response or redirect
        return response()->json($payment);
    }

    public function store(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'ratings' => 'required|integer|min:1|max:5',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'ks' => 'required|numeric',
            'qs' => 'required|numeric',
            'ls' => 'required|numeric',
            'ms' => 'required|numeric',
            'ss' => 'required|numeric',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create new product
        $product = new Product();
        $product->name = $request->name;
        $product->stars = $request->ratings;
        $product->category_id = $request->category_id;
        $product->description = $request->description;
        $product->save();

        // Save prices
        $prices = [
            ['size' => 'K/S', 'price' => $request->ks],
            ['size' => 'Q/S', 'price' => $request->qs],
            ['size' => 'L/S', 'price' => $request->ls],
            ['size' => 'M/S', 'price' => $request->ms],
            ['size' => 'S/S', 'price' => $request->ss],
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

        return response()->json(['status' => 'Product added successfully'], 201);
    }

    public function update(Request $request, $id)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'ratings' => 'required|integer|min:1|max:5',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'ks' => 'required|numeric',
            'qs' => 'required|numeric',
            'ls' => 'required|numeric',
            'ms' => 'required|numeric',
            'ss' => 'required|numeric',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:3078',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Proceed with updating the product
        $product = Product::findOrFail($id);
        $product->name = $request->name;
        $product->stars = $request->ratings;
        $product->category_id = $request->category_id;
        $product->description = $request->description;
        $product->save();

        // Save prices
        $prices = [
            ['size' => 'K/S', 'price' => $request->ks],
            ['size' => 'Q/S', 'price' => $request->qs],
            ['size' => 'L/S', 'price' => $request->ls],
            ['size' => 'M/S', 'price' => $request->ms],
            ['size' => 'S/S', 'price' => $request->ss],
        ];

        foreach ($prices as $price) {
            $sizeId = Size::where('name', $price['size'])->value('id');
            if ($sizeId) {
                $product->prices()->updateOrCreate(
                    ['size_id' => $sizeId],
                    ['price' => $price['price']]
                );
            }
        }

        // if user uploaded new images pictures
        if ($request->hasFile('images')) {

            try {
                // Get the old associated pictures and delete
                DB::beginTransaction();

                $pictures = $product->pictures;

                foreach ($pictures as $picture) {
                    $imagePath = public_path($picture->image_path); // Directly access the public path
                    if (file_exists($imagePath)) {
                        unlink($imagePath); // Use unlink to delete the file
                    }
                    $picture->delete(); // Delete the record from the database
                }
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Error occurred while deleting old pictures', ['exception' => $e->getMessage()]);
                return response()->json(['errors' => ['An error occurred while deleting old images']], 500);
            }



            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->move(public_path('images'), $imageName);

                $productPicture = new ProductPicture();
                $productPicture->product_id = $product->id;
                $productPicture->image_path = 'images/' . $imageName;
                $productPicture->save();
            }
        }

        return response()->json(['status' => 'Product updated successfully'], 200);
    }



    public function destroy($id)
    {
        try {
            DB::beginTransaction();

            // Find the product by ID
            $product = Product::findOrFail($id);

            // Get the associated pictures
            $pictures = $product->pictures;

            // Log::info('Deleting product pictures', ['pictures' => $pictures->pluck('image_path')]);


            // Delete the product (this will also delete related records due to cascade)
            $product->delete();

            // Delete the images from storage
            foreach ($pictures as $picture) {
                $imagePath = public_path($picture->image_path); // Directly access the public path
                if (file_exists($imagePath)) {
                    unlink($imagePath); // Use unlink to delete the file
                    // Log::info('Deleted image from storage', ['path' => $imagePath]);
                }
            }


            DB::commit();

            return response()->json(['status' => 'Product deleted successfully'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error occurred while deleting product', ['exception' => $e->getMessage()]);
            return response()->json(['errors' => ['An error occurred while deleting the product and its images']], 500);
        }
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

        ])->orderBy('id', 'desc')->get();

        return response()->json(['products' => $products]);
    }


    // get products with limit 
    // public function getProductsWithLimit($limit)
    // {
    //     // Fetch one product from each category until the limit is reached
    //     $products = Product::with([
    //         'prices' => function ($query) {
    //             // Subquery to get min and max size_id
    //             $minSizeId = DB::table('sizes')->select('id')->orderBy('id', 'asc')->limit(1)->first()->id;
    //             $maxSizeId = DB::table('sizes')->select('id')->orderBy('id', 'desc')->limit(1)->first()->id;

    //             // Fetch prices using whereIn with both min and max size_id
    //             $query->whereIn('size_id', [$minSizeId, $maxSizeId]);
    //         },
    //         'prices.size',
    //         'pictures' => function ($query) {
    //             $query->orderBy('id', 'asc')->limit(1);
    //         },
    //         'category'
    //     ])
    //         ->select('products.*')
    //         ->inRandomOrder()
    //         ->limit($limit)
    //         ->get();

    //     return response()->json(['products' => $products]);
    // }


    public function getProductsWithLimit($limit)
    {
        // Initialize an empty collection to store the final products
        $finalProducts = collect();

        // Get the categories with their products
        $categories = Category::with([
            'products' => function ($query) {
                $query->orderBy('created_at', 'desc'); // Order by latest created
            },
            'products.prices' => function ($query) {
                // Subquery to get min and max size_id
                $minSizeId = DB::table('sizes')->select('id')->orderBy('id', 'asc')->limit(1)->first()->id;
                $maxSizeId = DB::table('sizes')->select('id')->orderBy('id', 'desc')->limit(1)->first()->id;

                // Fetch prices using whereIn with both min and max size_id
                $query->whereIn('size_id', [$minSizeId, $maxSizeId]);
            },
            'products.prices.size',
            'products.pictures' => function ($query) {
                $query->orderBy('id', 'asc')->limit(1);
            }
        ])->get();

        $categoryIndex = 0;

        while ($finalProducts->count() < $limit) {
            $category = $categories[$categoryIndex];

            if ($category->products->isNotEmpty()) {
                $product = $category->products->shift(); // Get and remove the first product
                $finalProducts->push($product);
            }

            // Move to the next category
            $categoryIndex++;

            // If we've gone through all categories, start again from the beginning
            if ($categoryIndex >= $categories->count()) {
                $categoryIndex = 0;
            }

            // Break if we can't find enough products
            if ($finalProducts->count() >= $limit || $finalProducts->count() == $categories->sum(fn ($category) => $category->products->count())) {
                break;
            }
        }

        return response()->json(['products' => $finalProducts]);
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
