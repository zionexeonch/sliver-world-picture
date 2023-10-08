import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";

const AnimeList = ({ title, animes }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const [selectedAlphabet, setSelectedAlphabet] = useState("");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const filterByAlphabet = (e) => {
        const selectedValue = e.target.value;
        setSelectedAlphabet(selectedValue);

        // Inertia.js visit
        window.location = `/anime-list/${selectedValue}`;
    };

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:p-0 lg:my-4 lg:mx-auto">
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="flex p-4 text-xl font-semibold uppercase text-white">
                        <h4>Anime List</h4>
                    </div>
                    <hr className="h-px py-1 mb-4 bg-slate-200 border-0" />
                    <div className="m-4">
                        <select
                            value={selectedAlphabet}
                            onChange={filterByAlphabet}
                            className="p-2 border border-gray-300 rounded"
                        >
                            <option value="" disabled>
                                Select Alphabet
                            </option>
                            {alphabet.map((letter) => (
                                <option key={letter} value={letter}>
                                    {letter}
                                </option>
                            ))}
                        </select>
                    </div>
                    <ul className="list-decimal mx-6 p-4 text-white">
                        {animes.data.map((anime) => (
                            <li
                                key={anime.id}
                                className="cursor-pointer hover:text-blue-500 hover:underline"
                            >
                                <Link href={`/details/animes/${anime.judul}`}>
                                    {anime.judul}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between m-4">
                        <button
                            disabled={!animes.prev_page_url}
                            onClick={() =>
                                (window.location = animes.prev_page_url)
                            }
                            className={`py-2 px-4 rounded ${
                                !animes.prev_page_url
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-700 text-white"
                            }`}
                        >
                            Previous
                        </button>

                        <button
                            disabled={!animes.next_page_url}
                            onClick={() =>
                                (window.location = animes.next_page_url)
                            }
                            className={`py-2 px-4 rounded ${
                                !animes.next_page_url
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-700 text-white"
                            }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
AnimeList.layout = (page) => <Main children={page} />;
export default AnimeList;
