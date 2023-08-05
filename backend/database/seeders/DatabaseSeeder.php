<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'role' => 1,
            'email_verified_at' => now(),
        ]);

        \App\Models\User::factory()->create([
            'first_name' => 'User',
            'last_name' => 'Only',
            'email' => 'user@user.com',
            'password' => Hash::make('user123'),
            'role' => 0,
            'email_verified_at' => now(),
        ]);

        // \App\Models\User::factory(10)->create();

        $this->call([
            ContactSeeder::class,
            InquirySeeder::class,
            InventorySeeder::class
        ]);
    }
}
