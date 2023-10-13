import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const { url } = usePage();
    const handleLogout = () => {
        router.post("/logout");
    };
    useEffect(() => {
        const timeout = setTimeout(handleLogout, 600000); // Logout otomatis setelah 10 menit (600 detik)
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <div
                className={`lg:hidden fixed top-0 left-0 h-full bg-slate-900 p-4 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-end mb-4">
                    {/* Tombol close */}
                    <div
                        className="text-2xl cursor-pointer"
                        onClick={toggleSidebar}
                    >
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
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </div>
                </div>
                {/* Konten Sidebar */}
                <div className="justify-center items-center">
                    {/* Logo atau judul */}
                    <div className="text-2xl font-bold mb-4">Admin SWP</div>
                    {/* Menu */}
                    <nav className="space-y-4 mb-4">
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
                    <div className="flex justify-center pr-4">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
