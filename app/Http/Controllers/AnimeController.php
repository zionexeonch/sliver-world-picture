<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    // Menampilkan halaman tambah anime
    public function create()
    {
        return Inertia::render('Components/Admin/TambahAnime');
    }

    public function store(Request $request)
    {
        // Validasi input

        $anime = new Anime;
        $anime->judul = $request->judul;
        $anime->jepang = $request->jepang;
        // ... (isi atribut lainnya)
        $anime->download_links = $request->download_links;
        $anime->genres = $request->genres;

        // Upload gambar ke Cloudinary dan dapatkan URL
        if ($request->hasFile('url_image')) {
            $imagePath = $request->file('url_image')->storeOnCloudinary('images');
            $anime->url_image = $imagePath->getSecurePath();
        }

        $anime->save();

        return redirect()->route('animes.index');
    }

    public function edit(Anime $anime)
    {
        return view('animes.edit', compact('anime'));
    }

    public function update(Request $request, Anime $anime)
    {
        // Validasi input

        $anime->judul = $request->judul;
        $anime->jepang = $request->jepang;
        // ... (isi atribut lainnya)
        $anime->download_links = $request->download_links;
        $anime->genres = $request->genres;

        // Upload gambar ke Cloudinary dan dapatkan URL
        if ($request->hasFile('url_image')) {
            $imagePath = $request->file('url_image')->storeOnCloudinary('images');
            $anime->url_image = $imagePath->getSecurePath();
        }

        $anime->save();

        return redirect()->route('animes.index');
    }

    public function destroy(Anime $anime)
    {
        $anime->delete();
        return redirect()->route('animes.index');
    }
}
