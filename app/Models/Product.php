<?php

namespace App\Models;

use App\Models\Size;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\ProductPicture;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'stars', 'category_id'];

    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'prices')
            ->withPivot('price')
            ->withTimestamps();
    }

    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function pictures()
    {
        return $this->hasMany(ProductPicture::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
