import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimeTable = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        axios
            .get("/admin/anime") // Sesuaikan dengan URL backend Anda
            .then((response) => {
                setAnimes(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const TABLE_HEAD = [
        "ID",
        "Gambar Anime",
        "Judul",
        "Jepang",
        "Slug",
        "produser_or_author",
        "tipe",
        "Total Episode / Chapter",
        "Durasi",
        "Studio",
        "rating",
        "genre",
        "status",
        "Tanggal Rilis",
        "Sinopsis",
        "Link Download / Episode",
        "Link Download Batch",
    ];

    return (
        <div className="overflow-scroll px-0 mt-4">
            <table className="w-full min-w-max table-auto text-left">
                <thead className="text-xs text-white uppercase bg-slate-600">
                    <tr>
                        {TABLE_HEAD.map((head, i) => (
                            <th
                                key={i}
                                scope="col"
                                className="leading-none p-4"
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(animes) &&
                        animes.map((anime) => (
                            <tr
                                key={anime.id}
                                className="bg-slate-900 border-b hover:bg-slate-700 text-white"
                            >
                                <td>{anime.id}</td>
                                <td>{anime.judul}</td>
                                <td>{anime.jepang}</td>
                                <td>{anime.slug}</td>
                                <td>{anime.produser_or_author}</td>
                                <td>{anime.tipe}</td>
                                <td>{anime.total}</td>
                                <td>{anime.durasi}</td>
                                <td>{anime.studio}</td>
                                <td>{anime.rating}</td>
                                <td>{anime.genre}</td>
                                <td>{anime.status}</td>
                                <td>{anime.hari_rilis}</td>
                                <td>{anime.deskripsi}</td>
                                <td>{anime.list_download_episode}</td>
                                <td>{anime.list_download_batch}</td>
                                <td>
                                    <Link
                                        href="/admin/edit-anime"
                                        className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        href="/admin/delete-anime"
                                        className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AnimeTable;
