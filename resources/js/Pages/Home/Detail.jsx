import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const Detail = ({ title, details }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <Head title={title} />
            <div className="container p-4 lg:p-0 lg:my-4 lg:mx-auto">
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="flex p-4 text-white">
                        <h4>{details.judul}</h4>
                    </div>
                    <hr className="h-px py-1 mb-4 bg-slate-200 border-0" />
                    <div className="flex items-center justify-center mb-4">
                        <img src={details.url_image} alt={details.judul} />
                    </div>
                    <div className="flex px-4 py-2 mb-4 bg-slate-500 text-white">
                        <h4>Informasi Seputar {details.judul}</h4>
                    </div>
                    <ul className="list-disc uppercase mb-4 px-8 text-white">
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Judul : {details.judul}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Jepang : {details.slug}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Rating : {details.rating}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Produser / Author : {details.produser_or_author}
                            </p>
                        </li>

                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Tipe : {details.tipe}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Status : {details.status}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Total Episode / Chapter : {details.total}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Durasi : {details.durasi}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Tanggal Rilis : {details.hari_rilis}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Studio : {details.studio}
                            </p>
                        </li>
                        <li className="md:text-xl text-lg mb-3">
                            <p className="md:text-base text-sm text-justify">
                                Genre : {details.genre}
                            </p>
                        </li>
                    </ul>
                    <div className="flex px-4 py-2 mb-4 bg-slate-500 text-white">
                        <h4>Sinopsis {details.judul}</h4>
                    </div>
                    <div className="md:text-base text-sm text-justify mb-4 px-4 text-white">
                        <p>{details.deskripsi}</p>
                    </div>
                    <div className="flex flex-row px-4 py-2 mb-4 bg-slate-500 text-white">
                        <h4>
                            {details.judul} Episode / Chapter List{" "}
                            <span className="text-slate-900 font-black">
                                (Link Download + Streaming / Reading)
                            </span>
                        </h4>
                    </div>
                    <div className="md:text-base text-sm text-justify mb-4 px-4 text-white">
                        <p>{details.list}</p>
                    </div>
                    <div className="flex flex-row px-4 py-2 mb-4 bg-slate-500 text-white">
                        <h4>{details.judul} Batch </h4>
                    </div>
                    <div className="md:text-base text-sm text-justify mb-4 px-4 text-white">
                        <p>{details.batch}</p>
                    </div>
                    <div className="md:text-base text-sm text-justify mb-4 px-4">
                        <button
                            onClick={goBack}
                            className="bg-slate-500 hover:bg-slate-700 hover:text-slate-200 text-white py-2 px-4 rounded flex space-x-2"
                        >
                            <ArrowLeftIcon className="h-6" />
                            <span className="text-base">Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
Detail.layout = (page) => <Main children={page} />;
export default Detail;
