import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Home/Main";
import OngoingLists from "@/Components/OngoingAnime/OngoingLists";
import Paginator from "@/Components/OngoingAnime/Paginator";

const OngoingAnime = (props) => {
    useEffect(() => {
        AOS.refresh();
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
                    </div>
                    <div className="relative p-2 overflow-auto">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 place-items-center h-full mx-auto">
                            <OngoingLists
                                ongoinganimes={props.ongoinganimes.data}
                            />
                        </div>
                        <Paginator meta={props.ongoinganimes.meta} />
                    </div>
                </div>
            </div>
        </>
    );
};
OngoingAnime.layout = (page) => <Main children={page} />;
export default OngoingAnime;
