<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'size_id', 'price'];

    public function size()
    {
        return $this->belongsTo(Size::class);
    }
}
