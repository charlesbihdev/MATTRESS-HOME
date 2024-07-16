<?php

namespace Database\Seeders;

use App\Models\Size;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Faker\Factory as Faker;

class PriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $products = Product::all();
        $sizes = Size::all();

        foreach ($products as $product) {
            foreach ($sizes as $size) {
                DB::table('prices')->insert([
                    'product_id' => $product->id,
                    'size_id' => $size->id,
                    'price' => $faker->randomFloat(2, 100, 1000),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
