<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('User/Login', [
            "title" => "Login | Silver World Pictures"
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            // Jika autentikasi berhasil
            return redirect()->intended('/admin/dashboard');
        }

        // Jika autentikasi gagal
        return back()->withErrors(['username' => 'Invalid credentials']);
    }
}
