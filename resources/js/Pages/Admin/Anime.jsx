import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";
import { ListBulletIcon } from "@heroicons/react/24/solid";

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

const Anime = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        // Ambil data dari backend saat komponen dimuat
        fetch("/admin/tambah-anime")
            .then((response) => response.json())
            .then((data) => setAnimeData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:my-4 lg:mx-auto text-white">
                <h1 className="text-2xl font-bold mb-5">Anime Data</h1>

                <div className="overflow-scroll px-0">
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
                            <tr className="bg-slate-900 border-b hover:bg-slate-700 text-white">
                                <td className="px-6 py-4">White</td>
                                <td className="px-6 py-4">Laptop PC</td>
                                <td className="px-6 py-4">No</td>
                                <td className="px-6 py-4">Yes</td>
                                <td className="px-6 py-4">$1999</td>
                                <td className="px-6 py-4">1.0 lb.</td>
                                <td className="flex items-center px-6 py-4 space-x-3">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href="#"
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                    >
                                        Remove
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
Anime.layout = (page) => <Main children={page} />;
export default Anime;
