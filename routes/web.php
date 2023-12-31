<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnimeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';

// Route::get('/', function () {
//     return Inertia::render('SplashScreen');
// });

Route::get('/login', [LoginController::class, 'showLoginForm']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/admin/dashboard', [AdminController::class, 'index']);
Route::get('/admin/anime', [AdminController::class, 'anime']);
Route::get('/admin/manga', [AdminController::class, 'manga']);
Route::get('/admin/movie', [AdminController::class, 'movie']);
Route::post('/admin/reports', [AdminController::class, 'generatePDF']);

Route::get('/admin/tambah-anime', [AnimeController::class, 'create']);

Route::get('/', [HomeController::class, 'index']);
Route::get('/ongoing-anime', [HomeController::class, "ongoing_anime"]);
Route::get('/anime-list', [HomeController::class, "anime_list"]);
Route::get('/anime-list/{alphabet}', [HomeController::class, 'getDataByAlphabet']);
Route::get('/complete-anime', [HomeController::class, "complete_anime"]);
Route::get('/manga', [HomeController::class, 'manga']);
Route::get('/movie', [HomeController::class, "movie"])->name('home.movie');
Route::get('/details/{type}/{judul}', [HomeController::class, "detail"])->name('detail.show');
// Route::get('/manga/filter', [HomeController::class, 'filter']);
// Route::get('/kontak-saya', [HomeController::class, "kontak_saya"]);
// Route::get('/commission', [HomeController::class, "commission"]);

// Route::get('/misi', [HomeController::class, "misi"]);
// Route::get('/tim', [HomeController::class, "tim"]);
// Route::get('/hasil-kerja', [HomeController::class, "hasil_kerja"])->name('hasil.show');
