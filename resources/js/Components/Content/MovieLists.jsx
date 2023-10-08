import { Link } from "@inertiajs/react";

const isMovie = (movies) => {
    return movies.slice(0, 10).map((movie, index) => {
        return (
            <Link href={`/details/movies/${movie.judul}`} key={index}>
                <div className="w-[100px] h-[160px] lg:w-[200px] lg:h-[320px] rounded shadow-md">
                    <div className="relative">
                        <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                            <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                {movie.judul}
                            </h1>
                        </span>
                        <div className="w-full flex flex-wrap content-center">
                            <img
                                className="bg-none object-cover"
                                src={movie.url_image}
                                alt={movie.judul}
                            />
                            <div className="absolute flex items-center space-x-1 top-2 right-1 lg:right-2 py-auto px-2 lg:py-2 lg:px-4 bg-slate-500 text-white rounded-lg">
                                <svg
                                    className="w-3 h-3 lg:w-4 lg:h-4 text-gray-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="text-sm lg:text-lg">
                                    {movie.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });
};

const noMovie = () => {
    return (
        <>
            <div>Tidak ada hasil kerja saat ini</div>
        </>
    );
};

const MovieLists = ({ movies }) => {
    return !movies ? noMovie() : isMovie(movies);
};
export default MovieLists;
