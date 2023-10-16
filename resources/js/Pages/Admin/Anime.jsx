import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { Button } from "flowbite-react";
import AnimeTable from "@/Components/Admin/AnimeTable";
import TambahAnime from "@/Components/Admin/TambahAnime";

const Anime = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingAnimeId, setEditingAnimeId] = useState(null);

    const openForm = (id = null) => {
        setIsFormOpen(true);
        setEditingAnimeId(id);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setEditingAnimeId(null);
    };

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:my-4 lg:mx-auto text-white">
                <h1 className="text-2xl font-bold mb-5">Anime Data</h1>
                <div className="flex justify-start items-start">
                    <button
                        onClick={() => openForm()}
                        className="flex space-x-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                    >
                        <ListBulletIcon className="h-6" />
                        <span>Tambah Anime</span>
                    </button>
                </div>
                <AnimeTable editAnime={openForm} />
                {isFormOpen && (
                    <TambahAnime
                        id={editingAnimeId}
                        onClose={closeForm}
                        isEditing={editingAnimeId !== null}
                    />
                )}
            </div>
        </>
    );
};
Anime.layout = (page) => <Main children={page} />;
export default Anime;
