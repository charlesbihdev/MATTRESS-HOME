<?php

namespace Database\Seeders;

use App\Models\Size;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $sizes = ['K/S', 'Q/S', 'L/S', 'M/S', 'S/S'];

        foreach ($sizes as $size) {
            Size::create(['name' => $size]);
        }
    }
}
