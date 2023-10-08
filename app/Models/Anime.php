<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anime extends Model
{
    use HasFactory;
    protected $table = 'animes';
    protected $primaryKey = 'id';
    protected $fillable = ['url_image', 'judul', 'jepang', 'slug', 'produser', 'tipe', 'total', 'durasi', 'studio', 'rating', 'genre', 'status', 'hari_rilis', 'deskripsi'];
}
