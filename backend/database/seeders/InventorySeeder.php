<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Inventory;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Inventory::create([
            'item_name' => 'Example Item 1',
            'price' => 10.99,
            'currency' => 'USD',
            'quantity' => 100,
            'unit' => 'pieces',
            'vendor_supplier' => 'Vendor 1',
            'type' => 'Type 1',
            'code' => '12345',
            'category' => 'Category 1',
            'location' => 'Location 1',
            'description' => 'Example description 1',
        ]);

        Inventory::create([
            'item_name' => 'Example Item 2',
            'price' => 15.99,
            'currency' => 'USD',
            'quantity' => 50,
            'unit' => 'pieces',
            'vendor_supplier' => 'Vendor 2',
            'type' => 'Type 2',
            'code' => '54321',
            'category' => 'Category 2',
            'location' => 'Location 2',
            'description' => 'Example description 2',
        ]);

        // Add more inventory records as needed
    }
}
