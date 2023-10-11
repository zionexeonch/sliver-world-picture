<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render("User/Admin", [
            "title" => "Dashboard Admin | Silver World Pictures",
        ]);
    }
}
