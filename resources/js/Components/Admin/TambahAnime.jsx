import React, { useEffect, useState } from "react";
import axios from "axios";

const TambahAnime = ({ id, onClose, isEditing }) => {
    const [formData, setFormData] = useState({
        url_image: "",
        judul: "",
        jepang: "",
        slug: "",
        produser_or_author: "",
        tipe: "",
        total: "",
        durasi: "",
        studio: "",
        rating: "",
        genre: "",
        status: "",
        hari_rilis: "",
        deskripsi: "",
        list_download_episode: "",
        list_download_batch: "",
    });

    useEffect(() => {
        if (isEditing) {
            axios
                .get(`/admin/edit-anime/${id}`) // Sesuaikan dengan URL backend Anda
                .then((response) => {
                    setFormData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [isEditing, id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            axios
                .put(`/admin/edit-anime/${id}`, formData) // Sesuaikan dengan URL backend Anda
                .then((response) => {
                    onClose();
                })
                .catch((error) => {
                    console.error("Error updating data:", error);
                });
        } else {
            axios
                .post("/admin/tambah-anime", formData) // Sesuaikan dengan URL backend Anda
                .then((response) => {
                    onClose();
                })
                .catch((error) => {
                    console.error("Error adding data:", error);
                });
        }
    };
    return (
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 lg:my-4 lg:mx-auto p-4">
                <div className="bg-slate-800 p-8 rounded shadow-lg">
                    <h2 className="text-2xl mb-4">
                        {isEditing ? "Edit Anime" : "Tambah Anime"}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-8">
                            <div className="">
                                <label
                                    htmlFor="judul"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Judul Anime
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="judul"
                                        name="judul"
                                        value={formData.judul}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="jepang"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Jepang
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="jepang"
                                        name="jepang"
                                        value={formData.jepang}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="slug"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Slug
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="slug"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label
                                    htmlFor="produser_or_author"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
                                    Produser or Author
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="produser_or_author"
                                        name="produser_or_author"
                                        value={formData.produser_or_author}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Add more fields as needed */}

                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                            >
                                {isEditing
                                    ? "Simpan Perubahan"
                                    : "Tambah Anime"}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TambahAnime;
