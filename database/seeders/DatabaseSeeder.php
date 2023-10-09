<?php

namespace Database\Seeders;

use App\Models\Anime;
use App\Models\Manga;
use App\Models\Movie;
use App\Models\User;
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
        // Anime::create([
        //     "url_image" => "https://res.cloudinary.com/dnmkw2715/image/upload/v1691572544/zionexeonch/art/Desain_tanpa_judul_14_nfntsj.png",
        //     "judul" => "alfkjalfjaf",
        //     "jepang" => "faoeifjald",
        //     "slug" => ";lfajoeawjf",
        //     "produser_or_author" => "alfkjalfjaf",
        //     "tipe" => "tv",
        //     "total" => "24",
        //     "durasi" => "24 min",
        //     "studio" => "mappa",
        //     "rating" => "9.90",
        //     "genre" => "yaoi",
        //     "status" => "ongoing",
        //     "hari_rilis" => "1999-05-1",
        //     "deskripsi" => "asdfasfasdfawre",
        // ]);
        User::create([
            "username" => "admin",
            "password" => bcrypt("admin123")
        ]);
        Anime::factory()->count(50)->create();
        Manga::factory()->count(50)->create();
        Movie::factory()->count(50)->create();
    }
}
