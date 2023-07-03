<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_name',
        'price',
        'currency',
        'quantity',
        'unit',
        'vendor_supplier',
        'type',
        'code',
        'category',
        'location',
        'description',
    ];
}
