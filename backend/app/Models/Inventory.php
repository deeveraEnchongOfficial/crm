<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Purchased;

class Inventory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function purchasedItems()
    {
        return $this->hasMany(Purchased::class);
    }
}
