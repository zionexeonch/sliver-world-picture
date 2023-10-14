<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;
    protected $table = 'animes';
    protected $primaryKey = 'id';
    protected $fillable = [
        'url_image',
        'judul',
        'jepang',
        'slug',
        'produser_or_author',
        'tipe',
        'total',
        'durasi',
        'studio',
        'rating',
        'status',
        'hari_rilis',
        'deskripsi',
        'genres',
        'list_download_episode',
        'list_download_batch',
    ];

    protected $casts = [
        'list_download_episode' => 'json', // Tentukan tipe data
        'list_download_batch' => 'json', // Tentukan tipe data
        'genres' => 'json', // Tentukan tipe data
    ];
}
