<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Inventory;
use Faker\Factory as Faker;

class InventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // Generate 50 random inventory items
        for ($i = 0; $i < 50; $i++) {
            Inventory::create([
                'item_name' => $faker->unique()->word . ' ' . $faker->randomDigitNotNull,
                'price' => $faker->randomFloat(2, 5, 100),
                'currency' => 'PHP',
                'quantity' => $faker->numberBetween(10, 200),
                'unit' => $faker->randomElement(['pieces', 'units', 'boxes']),
                'vendor_supplier' => $faker->company,
                'type' => $faker->randomElement(['Type 1', 'Type 2', 'Type 3']),
                'code' => $faker->unique()->bothify('???####'),
                'category' => $faker->randomElement(['Category 1', 'Category 2', 'Category 3']),
                'location' => $faker->randomElement(['Location 1', 'Location 2', 'Location 3']),
                'description' => $faker->paragraph,
            ]);
        }
    }
}
