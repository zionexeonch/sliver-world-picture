import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm mt-4">
                    {prev && (
                        <li>
                            <Link
                                href={prev}
                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white bg-slate-700 border border-slate-500 rounded-l-lg hover:bg-slate-600 hover:text-gray-700"
                            >
                                Previous
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-slate-700 border border-slate-500 hover:bg-slate-600 hover:text-gray-700">
                            {current}
                        </Link>
                    </li>
                    {next && (
                        <li>
                            <Link
                                href={next}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-slate-700 border border-slate-500 rounded-r-lg hover:bg-slate-600 hover:text-gray-700"
                            >
                                Next
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
};
export default Paginator;
