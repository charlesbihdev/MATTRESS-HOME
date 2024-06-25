<?php

namespace Database\Seeders;

use App\Models\Product;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductPictureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $products = Product::all();

        foreach ($products as $product) {
            DB::table('product_pictures')->insert([
                'product_id' => $product->id,
                'image_path' => 'https://random-image-pepebigotes.vercel.app/api/random-image',
                'created_at' => now(),
                'updated_at' => now(),

            ]);

            DB::table('product_pictures')->insert([
                'product_id' => $product->id,
                'image_path' => 'https://random-image-pepebigotes.vercel.app/api/random-image',
                'created_at' => now(),
                'updated_at' => now(),

            ]);
        }
    }
}
