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
        return Inertia::render("Components/Admin/TambahAnime");
    }

    // Menyimpan data anime baru ke database
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            // Atur validasi sesuai dengan kebutuhan Anda
        ]);

        // Simpan data ke database
        Anime::create([
            'url_image' => $request->url_image,
            'judul' => $request->judul,
            // Lanjutkan dengan atribut-atribut lain
            'list_download' => [
                'episode' => $request->list_download_episode,
                'batch' => $request->list_download_batch,
            ],
            'genre' => $request->genre,
            // Lanjutkan dengan atribut-atribut lain
        ]);

        return redirect()->route('anime.index')->with('success', 'Anime berhasil ditambahkan');
    }

    // Menampilkan halaman edit anime
    public function edit($id)
    {
        $anime = Anime::findOrFail($id);
        return view('anime.edit', compact('anime'));
    }

    // Memperbarui data anime di database
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            // Atur validasi sesuai dengan kebutuhan Anda
        ]);

        // Simpan data ke database
        $anime = Anime::findOrFail($id);
        $anime->update([
            'url_image' => $request->url_image,
            'judul' => $request->judul,
            // Lanjutkan dengan atribut-atribut lain
            'list_download' => [
                'episode' => $request->list_download_episode,
                'batch' => $request->list_download_batch,
            ],
            'genre' => $request->genre,
            // Lanjutkan dengan atribut-atribut lain
        ]);

        return redirect()->route('anime.index')->with('success', 'Anime berhasil diperbarui');
    }

    // Menghapus data anime dari database
    public function destroy($id)
    {
        $anime = Anime::findOrFail($id);
        $anime->delete();

        return redirect()->route('anime.index')->with('success', 'Anime berhasil dihapus');
    }
}
