<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->string('url_image')->nullable(); // Ubah menjadi nullable
            $table->string('judul');
            $table->string('jepang');
            $table->string('slug');
            $table->string('produser_or_author');
            $table->string('tipe');
            $table->string('total');
            $table->string('durasi');
            $table->string('studio');
            $table->decimal('rating', 10, 2);
            $table->string('status');
            $table->date('hari_rilis');
            $table->text('deskripsi');
            $table->string('genre')->nullable(); // Ubah menjadi nullable
            $table->json('download_links')->nullable(); // Tambah kolom download_links
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animes');
    }
};
