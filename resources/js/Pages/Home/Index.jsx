import React, { useEffect } from "react";
import Main from "@/Layouts/Home/Main";
import Aos from "aos";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import OngoingLists from "@/Components/Content/OngoingLists";
import OngoingSliders from "@/Components/Content/OngoingSliders";
import CompleteSliders from "@/Components/Content/CompleteSliders";
import CompleteLists from "@/Components/Content/CompleteLists";
import MangaSliders from "@/Components/Content/MangaSliders";
import MangaLists from "@/Components/Content/MangaLists";
import MovieSliders from "@/Components/Content/MovieSliders";
import MovieLists from "@/Components/Content/MovieLists";
import { Head, Link } from "@inertiajs/react";

const Index = (props) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    return (
        <>
            <Head title={props.title} />
            <div className="container p-4 lg:my-4 lg:mx-auto">
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Ongoing Anime
                        </h2>
                        <div className="hidden md:block p-2 ">
                            <Link
                                href="/ongoing-anime"
                                className="bg-slate-300 hover:bg-slate-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>More Ongoing Anime</span>
                                <ArrowRightIcon className="fill-current w-4 h-4 mr-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="relative mb-4 w-full pb-2 flex gap-3 snap-x snap-mandatory overflow-x-auto scrollbar">
                            <OngoingSliders
                                ongoingslideranimes={
                                    props.ongoingslideranimes.data
                                }
                            />
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            <OngoingLists
                                ongoinganimes={props.ongoinganimes.data}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Complete Anime
                        </h2>
                        <div className="hidden md:block p-2 ">
                            <Link
                                href="/complete-anime"
                                className="bg-slate-300 hover:bg-slate-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>More Complete Anime</span>
                                <ArrowRightIcon className="fill-current w-4 h-4 mr-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="relative w-full pb-2 flex gap-3 snap-x snap-mandatory overflow-x-auto scrollbar">
                            <CompleteSliders
                                completeslideranimes={
                                    props.completeslideranimes.data
                                }
                            />
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            <CompleteLists
                                completeanimes={props.completeanimes.data}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Manga
                        </h2>
                        <div className="hidden md:block p-2 ">
                            <Link
                                href="/manga"
                                className="bg-slate-300 hover:bg-slate-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>More Manga</span>
                                <ArrowRightIcon className="fill-current w-4 h-4 mr-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="relative w-full pb-2 flex gap-3 snap-x snap-mandatory overflow-x-auto scrollbar">
                            <MangaSliders
                                slidermangas={props.slidermangas.data}
                            />
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            <MangaLists mangas={props.mangas.data} />
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 border-2 border-slate-900 rounded-lg overflow-hidden mb-4">
                    <div className="relative flex justify-between align-baseline px-4 bg-slate-400">
                        <h2 className="mt-3 lg:pt-2 lg:px-4 p-2 rounded-t-md bg-slate-900 text-lg text-white">
                            Movie
                        </h2>
                        <div className="hidden md:block p-2 ">
                            <Link
                                href="/movie"
                                className="bg-slate-300 hover:bg-slate-600 text-gray-800 hover:text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                <span>More Movie</span>
                                <ArrowRightIcon className="fill-current w-4 h-4 mr-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="relative w-full pb-2 flex gap-3 snap-x snap-mandatory overflow-x-auto scrollbar">
                            <MovieSliders
                                slidermovies={props.slidermovies.data}
                            />
                        </div>
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            <MovieLists movies={props.movies.data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
