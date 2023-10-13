import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";

import { ListBulletIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

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
                <Card className="h-full w-full bg-slate-900 text-white">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        className="rounded-none bg-slate-900 text-white"
                    >
                        <div className="mb-8 flex items-center justify-between gap-8">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    Anime list
                                </Typography>
                                <Typography className="mt-1 font-normal">
                                    See information about all anime
                                </Typography>
                            </div>
                            <div className="flex shrink-0 flex-row">
                                <Link
                                    href="/admin/tambah-anime"
                                    className="flex items-center p-4 space-x-2 bg-slate-700 hover:bg-slate-800 rounded-sm"
                                    size="sm"
                                >
                                    <ListBulletIcon
                                        strokeWidth={2}
                                        className="h-4 w-4 "
                                    />{" "}
                                    <span>Tambah Anime</span>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-scroll px-0 ">
                        <table className="w-full min-w-max table-auto text-left ">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-y p-4">
                                            <div
                                                variant="small"
                                                className="font-normal leading-none opacity-70 uppercase text-white"
                                            >
                                                {head}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {animeData.map((anime) => (
                                    <tr key={anime.id}>
                                        <td>{anime.id}</td>
                                        <td>{anime.url_image}</td>
                                        <td>{anime.judul}</td>
                                        <td>{anime.jepang}</td>
                                        <td>{anime.slug}</td>
                                        <td>{anime.producer_or_author}</td>
                                        <td>{anime.tipe}</td>
                                        <td>{anime.total}</td>
                                        <td>{anime.durasi}</td>
                                        <td>{anime.studio}</td>
                                        <td>{anime.rating}</td>
                                        <td>{anime.genre.join(", ")}</td>
                                        <td>{anime.status}</td>
                                        <td>{anime.hari_rilis}</td>
                                        <td>{anime.deskripsi}</td>
                                        <td>
                                            {anime.link_download.join(", ")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4 text-white">
                        <Typography variant="small" className="font-normal">
                            Page 1 of 10
                        </Typography>
                        <div className="flex gap-2">
                            <Button
                                variant="outlined"
                                className="text-white bg-slate-700 hover:bg-slate-800"
                                size="sm"
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outlined"
                                className="text-white bg-slate-700 hover:bg-slate-800"
                                size="sm"
                            >
                                Next
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};
Anime.layout = (page) => <Main children={page} />;
export default Anime;
