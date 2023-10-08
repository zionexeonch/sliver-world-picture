<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Manga>
 */
class MangaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url_image' => $this->faker->imageUrl(200, 320),
            'judul' => $this->faker->sentence(),
            'jepang' => $this->faker->word(),
            'slug' => $this->faker->sentence(),
            'produser_or_author' => $this->faker->name(),
            'tipe' => $this->faker->randomElement(['tv', 'ova', 'movie', 'special', 'manga']),
            'total' => $this->faker->randomNumber(),
            'durasi' => $this->faker->time('H:i', 'now'),
            'studio' => $this->faker->company(),
            'rating' => $this->faker->randomFloat(2, 1, 10),
            'genre' => $this->faker->randomElement(['harem', 'yuri', 'romance', 'comedy', 'fantasy', 'action', 'adventure', 'ecchi', 'yuri', 'yaoi', 'sci-fi', 'horror', 'shounen', 'music', 'slice of life', 'drama'], $this->faker->numberBetween(1, 5)),
            'status' => $this->faker->randomElement(['ongoing', 'complete']),
            'hari_rilis' => $this->faker->date(),
            'deskripsi' => $this->faker->paragraph(),
        ];
    }
}
