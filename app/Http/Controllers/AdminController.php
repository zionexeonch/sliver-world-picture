<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Knp\Snappy\Pdf;

class AdminController extends Controller
{
    public function index()
    {
        $reports = Report::latest()->get();
        return Inertia::render("User/Admin", [
            "title" => "Dashboard Admin | Silver World Pictures",
            'reports' => $reports
        ]);
    }
    public function generatePDF(Request $request)
    {
        $dataURL = $request->input('dataURL');
        $formattedDate = $request->input('formattedDate');

        // Proses dataURL ke PDF menggunakan library seperti dompdf atau mpdf
        $pdf = PDF::loadHTML('pdf.template', compact('dataURL', 'formattedDate'));

        // Simpan atau kirim PDF
        return $pdf->download('dashboard_report.pdf');
    }
}
