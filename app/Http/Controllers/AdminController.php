<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnimeCollection;
use App\Http\Resources\ReportCollection;
use App\Models\Anime;
use App\Models\Report;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $reports = new ReportCollection(Report::latest()->get());
        return Inertia::render("User/Admin", [
            "title" => "Dashboard Admin | Silver World Pictures",
            'reports' => $reports
        ]);
    }
    public function anime()
    {
        $animes = new AnimeCollection(Anime::all());
        return Inertia::render("Admin/Anime", [
            "title" => "Anime Admin | Silver World Pictures",
            'animes' => $animes
        ]);
    }
    public function generatePDF()
    {
        $reports = Report::first();

        $pdf = PDF::loadView('pdf.report', compact('reports'));
        return $pdf->download('report.pdf');
    }
}
