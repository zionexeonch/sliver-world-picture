import { Head, Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";

const Manga = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
    const { mangas } = usePage().props;
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleFilter = () => {
        const url = `/manga?genre=${genre}&status=${status}`;
        router.get(url);
    };

    const handlePaginate = (page) => {
        const url = `/manga?page=${page}${genre ? `&genre=${genre}` : ""}${
            status ? `&status=${status}` : ""
        }`;
        router.get(url);
    };

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:my-4 lg:mx-auto">
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Manga
                        </h2>
                    </div>
                    <div className="relative p-2 lg:p-4 overflow-auto">
                        <div className="flex items-baseline space-x-4 mb-4">
                            <div>
                                <label className="block mb-2 text-sm lg:text-lg font-medium text-white">
                                    Genre
                                </label>
                                <select
                                    className="text-black hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold w-28 lg:w-auto text-base lg:text-lg"
                                    value={genre}
                                    onChange={handleGenreChange}
                                >
                                    <option value="">Semua</option>
                                    <option value="action">Action</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="harem">Harem</option>
                                    <option value="ecchi">Ecchi</option>
                                    <option value="romance">Romance</option>
                                    <option value="yuri">Yuri</option>
                                    <option value="yaoi">Yaoi</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm lg:text-base font-medium text-white">
                                    Status
                                </label>
                                <select
                                    className="text-black hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold w-28 lg:w-auto text-base lg:text-lg"
                                    value={status}
                                    onChange={handleStatusChange}
                                >
                                    <option value="">Semua</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="complete">Complete</option>
                                </select>
                            </div>
                            <div className="absolute pt-5 lg:pt-0 right-2 lg:static">
                                <button
                                    className="text-white bg-slate-600 hover:bg-slate-700 block py-2 px-3 lg:px-6 lg:w-auto"
                                    onClick={handleFilter}
                                >
                                    Filter
                                </button>
                            </div>
                        </div>
                        {mangas.data.length > 0 && (
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto ">
                                {mangas.data.map((manga) => (
                                    <Link
                                        href={`/details/mangas/${manga.judul}`}
                                        key={manga.id}
                                    >
                                        <div className="w-[100px] h-[160px] lg:w-[200px] lg:h-[320px] rounded shadow-md">
                                            <div className="relative">
                                                <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                                    <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                                        {manga.judul}
                                                    </h1>
                                                </span>
                                                <div className="w-full flex flex-wrap content-center">
                                                    <img
                                                        className="bg-none object-cover"
                                                        src={manga.url_image}
                                                        alt={manga.judul}
                                                    />
                                                    <div className="absolute top-2 right-1 lg:right-2 py-auto px-2 lg:py-2 lg:px-4 bg-slate-500 text-white rounded-lg">
                                                        <span className="text-sm lg:text-lg">
                                                            {manga.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                        <div className="mt-4">
                            {mangas.total > 10 && (
                                <div className="flex space-x-4">
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        onClick={() =>
                                            handlePaginate(
                                                mangas.current_page - 1
                                            )
                                        }
                                        disabled={!mangas.prev_page_url}
                                    >
                                        Sebelumnya
                                    </button>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        onClick={() =>
                                            handlePaginate(
                                                mangas.current_page + 1
                                            )
                                        }
                                        disabled={!mangas.next_page_url}
                                    >
                                        Selanjutnya
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
Manga.layout = (page) => <Main children={page} />;
export default Manga;
