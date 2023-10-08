import { Link } from "@inertiajs/react";

const isOngoingSliderAnime = (ongoingslideranimes) => {
    return ongoingslideranimes.slice(0, 8).map((ongoingslideranime, i) => {
        return (
            <div key={i} className="snap-start snap-always shrink-0">
                <Link href={`/details/animes/${ongoingslideranime.judul}`}>
                    <div className="w-[100px] h-[160px] lg:w-[200px] lg:h-[320px] rounded shadow-md">
                        <div className="relative">
                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                    {ongoingslideranime.judul}
                                </h1>
                            </span>
                            <div className="w-full flex flex-wrap content-center">
                                <img
                                    className="bg-none object-cover"
                                    src={ongoingslideranime.url_image}
                                    alt={ongoingslideranime.judul}
                                />
                                <div className="absolute top-2 right-1 lg:right-2 py-auto px-2 lg:py-2 lg:px-4 bg-slate-500 text-white rounded-lg">
                                    <span className="text-sm lg:text-lg">
                                        {ongoingslideranime.hari_rilis}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
};

const noOngoingSliderAnime = () => {
    return (
        <>
            <div>Tidak ada hasil kerja saat ini</div>
        </>
    );
};

const OngoingSliders = ({ ongoingslideranimes }) => {
    return !ongoingslideranimes
        ? noOngoingSliderAnime()
        : isOngoingSliderAnime(ongoingslideranimes);
};
export default OngoingSliders;
