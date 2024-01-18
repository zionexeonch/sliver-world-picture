import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";
import Paginator from "@/Components/CompleteAnime/Paginator";

const CompleteAnime = ({ title, completeanimes }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const [filterGenre, setFilterGenre] = useState("all"); // Menyimpan genre terpilih

    // Fungsi untuk mengubah nilai filter genre dan status
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        if (name === "genre") {
            setFilterGenre(value);
        }
    };

    // Filter daftar manga berdasarkan genre dan status
    const filteredCompleteAnimes = completeanimes.data.filter(
        (completeanimes) => {
            if (filterGenre === "all") {
                return true; // Tampilkan semua manga jika tidak ada filter
            }

            if (filterGenre !== "all") {
                return completeanimes.genre === filterGenre;
            }

            return completeanimes.genre === filterGenre;
        }
    );

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:my-4 lg:mx-auto">
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Complete Anime
                        </h2>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="mb-4 lg:p-4">
                            <label className="block mb-2 text-sm lg:text-lg font-medium text-white">
                                Genre
                            </label>
                            <select
                                className="text-black hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold w-36 lg:w-auto text-base lg:text-lg"
                                name="genre"
                                onChange={handleFilterChange}
                                value={filterGenre}
                            >
                                <option value="all">All Genre</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="harem">Harem</option>
                                <option value="ecchi">Ecchi</option>
                                <option value="romance">Romance</option>
                                <option value="yuri">Yuri</option>
                                <option value="yaoi">Yaoi</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            {filteredCompleteAnimes.map((completeanime) => (
                                <Link
                                    href={`/details/animes/${completeanime.judul}`}
                                    key={completeanime.id}
                                >
                                    <div className="w-[100px] h-[160px] lg:w-[200px] lg:h-[320px] rounded shadow-md">
                                        <div className="relative">
                                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                                <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                                    {completeanime.judul}
                                                </h1>
                                            </span>
                                            <div className="w-full flex flex-wrap content-center">
                                                <img
                                                    className="bg-none object-cover"
                                                    src={
                                                        completeanime.url_image
                                                    }
                                                    alt={completeanime.judul}
                                                />
                                                <div className="absolute flex items-center space-x-1 top-2 right-1 lg:right-2 py-auto px-2 lg:py-2 lg:px-4 bg-slate-500 text-white rounded-lg">
                                                    <svg
                                                        className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <span className="text-sm lg:text-lg">
                                                        {completeanime.rating}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Paginator meta={completeanimes.meta} />
                    </div>
                </div>
            </div>
        </>
    );
};
CompleteAnime.layout = (page) => <Main children={page} />;
export default CompleteAnime;
