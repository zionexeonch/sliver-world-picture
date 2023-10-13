import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { url } = usePage();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        router.post("/logout");
    };
    useEffect(() => {
        const timeout = setTimeout(handleLogout, 600000); // Logout otomatis setelah 10 menit (600 detik)
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="bg-slate-900 p-4 text-white">
                {/* Tombol strip 3 untuk mobile */}
                <div className="block lg:hidden" onClick={toggleSidebar}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </div>
                <div className="hidden lg:flex justify-between items-center">
                    {/* Logo atau judul */}
                    <div className="text-2xl font-bold">Admin SWP</div>
                    {/* Menu */}
                    <nav className="flex space-x-4">
                        <Link
                            href="/admin/dashboard"
                            className={
                                url === "/admin/dashboard"
                                    ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                    : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                            }
                            aria-current="page"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/admin/anime"
                            className={
                                url === "/admin/anime"
                                    ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                    : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                            }
                            aria-current="page"
                        >
                            Anime
                        </Link>
                        <Link
                            href="/admin/manga"
                            className={
                                url === "/admin/manga"
                                    ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                    : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                            }
                            aria-current="page"
                        >
                            Manga
                        </Link>
                        <Link
                            href="/admin/movie"
                            className={
                                url === "/admin/movie"
                                    ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                    : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                            }
                            aria-current="page"
                        >
                            Movie
                        </Link>
                    </nav>
                    <div className="flex justify-end pr-4">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
                {/* Sidebar untuk mobile */}
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
        </>
    );
}
