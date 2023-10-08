<?php

namespace Database\Seeders;

use App\Models\Anime;
use App\Models\Manga;
use App\Models\Movie;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Anime::factory()->count(50)->create();
        Manga::factory()->count(50)->create();
        Movie::factory()->count(50)->create();
    }
}
