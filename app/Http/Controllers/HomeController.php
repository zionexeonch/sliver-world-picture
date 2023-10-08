<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnimeCollection;
use Illuminate\Http\Request;
use App\Http\Resources\CompleteAnimeCollection;
use App\Http\Resources\MangaCollection;
use App\Http\Resources\MovieCollection;
use App\Http\Resources\OngoingAnimeCollection;
use App\Models\Anime;
use App\Models\Manga;
use App\Models\Movie;
use Carbon\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $ongoinganimes = new OngoingAnimeCollection(Anime::where('status', 'ongoing')->get());
        $ongoingslideranimes = new OngoingAnimeCollection(Anime::where('status', 'ongoing')->inRandomOrder()->get());
        $completeanimes = new CompleteAnimeCollection(Anime::where('status', 'complete')->get());
        $completeslideranimes = new CompleteAnimeCollection(Anime::where('status', 'complete')->inRandomOrder()->get());
        $mangas = new MangaCollection(Manga::all());
        $slidermangas = new MangaCollection(Manga::inRandomOrder()->get());
        $movies = new MovieCollection(Movie::all());
        $slidermovies = new MovieCollection(Movie::inRandomOrder()->get());

        foreach ($ongoinganimes as $a) {
            $a->hari_rilis = Carbon::parse($a->hari_rilis)->format('l');
        }
        foreach ($ongoingslideranimes as $a) {
            $a->hari_rilis = Carbon::parse($a->hari_rilis)->format('l');
        }


        return Inertia::render("Home/Index", [
            "title" => "Selamat Datang | Silver World Pictures",
            "ongoinganimes" => $ongoinganimes,
            "ongoingslideranimes" => $ongoingslideranimes,
            "completeanimes" => $completeanimes,
            "completeslideranimes" => $completeslideranimes,
            "mangas" => $mangas,
            "slidermangas" => $slidermangas,
            "movies" => $movies,
            "slidermovies" => $slidermovies,
            'splash' => true
        ]);
    }
    public function ongoing_anime()
    {
        $ongoinganimes = new OngoingAnimeCollection(Anime::orderBy('hari_rilis', 'asc')->paginate(10));

        foreach ($ongoinganimes as $a) {
            $a->hari_rilis = Carbon::parse($a->hari_rilis)->format('l');
        }

        return Inertia::render("Home/OngoingAnime", [
            "title" => "Ongoing Anime | Silver World Pictures",
            "ongoinganimes" => $ongoinganimes,
        ]);
    }
    public function complete_anime()
    {
        $completeanimes = new CompleteAnimeCollection(Anime::orderBy('hari_rilis', 'asc')->paginate(10));
        return Inertia::render("Home/CompleteAnime", [
            "title" => "Complete Anime | Silver World Pictures",
            "completeanimes" => $completeanimes,
        ]);
    }
    public function manga(Request $request)
    {
        $perPage = 10;
        $genre = $request->input('genre');
        $status = $request->input('status');

        $query = Manga::query();

        if ($genre) {
            $query->where('genre', $genre);
        }

        if ($status) {
            $query->where('status', $status);
        }

        $mangas = $query->orderBy('judul', 'asc')->paginate($perPage);

        return Inertia::render('Home/Manga', [
            "title" => "Manga | Silver World Pictures",
            'mangas' => $mangas,
        ]);
    }

    public function detail($type, $title)
    {
        $detail = null;
        switch ($type) {
            case 'mangas':
                $detail = Manga::where('judul', $title)->firstOrFail();
                break;
            case 'animes':
                $detail = Anime::where('judul', $title)->firstOrFail();
                break;
            case 'movies':
                $detail = Movie::where('judul', $title)->firstOrFail();
                break;
            default:
                abort(404);
                break;
        }
        return Inertia::render('Home/Detail', ["title" => "Detail | Silver World Pictures", 'details' => $detail]);
    }

    public function movie()
    {
        $movies = new MovieCollection(Movie::orderBy('hari_rilis', 'desc')->paginate(10));
        return Inertia::render("Home/Movie", [
            "title" => "Movie | Silver World Pictures",
            "movies" => $movies,
        ]);
    }

    public function anime_list()
    {
        $animes = new AnimeCollection(Anime::orderBy('judul')->paginate(10));
        return Inertia::render("Home/AnimeList", [
            "title" => "Anime List | Silver World Pictures",
            "animes" => $animes,
        ]);
    }
    public function getDataByAlphabet($alphabet)
    {
        $animes = Anime::where('judul', 'like', $alphabet . '%')->paginate(10);
        return inertia('Home/AnimeList', compact('animes'));
    }
}
