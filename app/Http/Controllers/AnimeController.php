<?php

namespace App\Http\Controllers;

use App\Models\Anime;
use Cloudinary\Cloudinary;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Cviebrock\EloquentSluggable\Services\SlugService;
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

        $request->validate([
            'url_image' => 'required',
            'judul' => 'required',
            'jepang' => 'required',
            'slug' => 'required',
            'procedure_or_author' => 'required',
            'tipe' => 'required',
            'total' => 'required',
            'durasi' => 'required',
            'studio' => 'required',
            'rating' => 'required',
            'status' => 'required',
            'hari_rilis' => 'required',
            'deskripsi' => 'required',
            'genre' => 'required',
            'download_eps' => 'required',
            'download_batch' => 'required',
            // Tambahkan validasi lainnya sesuai kebutuhan
        ]);

        // Proses tambah data
        $anime = new Anime;
        $anime->judul = $request->judul;
        $anime->jepang = $request->jepang;
        $anime->slug = SlugService::createSlug($request->judul);
        $anime->procedure_of_author = $request->procedure_of_author;
        $anime->tipe = $request->tipe;
        $anime->total = $request->total;
        $anime->durasi = $request->durasi;
        $anime->studio = $request->studio;
        $anime->rating = $request->rating;
        $anime->status = $request->status;
        $anime->hari_rilis = $request->hari_rilis;
        $anime->deskripsi = $request->deskripsi;
        // Set other fields here

        // Handle multiple links for download_eps and download_batch
        $anime->download_eps = json_encode($request->input('download_eps'));
        $anime->download_batch = json_encode($request->input('download_batch'));

        // Handle multiple genres
        $anime->genre = json_encode($request->input('genre'));

        // Handle Cloudinary upload for url_image
        if ($request->hasFile('url_image')) {
            $image = $request->file('url_image');
            $uploadResult = Cloudinary::upload($image->getPathname(), [
                'folder' => 'anime_images',
                // Add other Cloudinary upload options as needed
            ]);
            $anime->url_image = $uploadResult['secure_url'];
        }

        $anime->save();

        // Tampilkan notifikasi sukses
        return redirect()->route('/admin/anime')->with('success', 'Data berhasil ditambahkan!');
    }

    public function edit(Anime $anime)
    {
        return view('animes.edit', compact('anime'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'url_image' => 'required',
            'judul' => 'required',
            'jepang' => 'required',
            'slug' => 'required',
            'procedure_or_author' => 'required',
            'tipe' => 'required',
            'total' => 'required',
            'durasi' => 'required',
            'studio' => 'required',
            'rating' => 'required',
            'status' => 'required',
            'hari_rilis' => 'required',
            'deskripsi' => 'required',
            'genre' => 'required',
            'download_eps' => 'required',
            'download_batch' => 'required',
            // Add validation rules for other fields
        ]);

        $anime = Anime::find($id);
        $anime->judul = $request->judul;
        $anime->jepang = $request->jepang;
        $anime->slug = Str::slug($request->judul);
        $anime->procedure_of_author = $request->procedure_of_author;
        $anime->tipe = $request->tipe;
        $anime->total = $request->total;
        $anime->durasi = $request->durasi;
        $anime->studio = $request->studio;
        $anime->rating = $request->rating;
        $anime->status = $request->status;
        $anime->hari_rilis = $request->hari_rilis;
        $anime->deskripsi = $request->deskripsi;
        // Update other fields here

        // Handle multiple links for download_eps and download_batch
        $anime->download_eps = json_encode($request->input('download_eps'));
        $anime->download_batch = json_encode($request->input('download_batch'));

        // Handle multiple genres
        $anime->genre = json_encode($request->input('genre'));

        // Handle Cloudinary upload for url_image
        if ($request->hasFile('url_image')) {
            $image = $request->file('url_image');
            $uploadResult = Cloudinary::upload($image->getPathname(), [
                'folder' => 'anime_images',
                // Add other Cloudinary upload options as needed
            ]);
            $anime->url_image = $uploadResult['secure_url'];
        }

        $anime->save();

        return redirect()->route('/admin/anime')->with('success', 'Data berhasil diubah!');
    }

    public function destroy(Anime $anime, $id)
    {
        $anime = Anime::find($id);

        // Delete the associated Cloudinary image
        if ($anime->url_image) {
            $publicId = basename($anime->url_image, '.' . pathinfo($anime->url_image, PATHINFO_EXTENSION));
            Cloudinary::destroy($publicId);
        }

        $anime->delete();
        return redirect()->route('/admin/anime')->with('success', 'Data berhasil dihapus!');
    }
}
