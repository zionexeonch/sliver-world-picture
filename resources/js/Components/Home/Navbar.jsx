import React, { Fragment, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const links = [
        { href: "/manga", label: "Manga" },
        { href: "/complete-anime", label: "Complete Anime" },
        { href: "#", label: "Release Schedule" },
        { href: "#", label: "Contact" },
    ];

    return (
        <nav className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <h1 className="text-white text-xl uppercase">
                    Silver World Pictures
                </h1>
            </div>
            <div className="flex lg:order-2">
                {/* <button
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button> */}
                <div className="relative hidden lg:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500"
                        placeholder="Search..."
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4 lg:hidden">
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!sidebarOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="hidden lg:block z-50">
                <div className="flex items-baseline space-x-4">
                    <Link
                        href="/"
                        className={
                            url === "/"
                                ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                        }
                        aria-current="page"
                    >
                        Home
                    </Link>

                    <Link
                        href="/ongoing-anime"
                        className={
                            url === "/ongoing-anime"
                                ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                        }
                    >
                        Ongoing
                    </Link>
                    <Link
                        href="/anime-list"
                        className={
                            url === "/anime-list"
                                ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                        }
                    >
                        Anime List
                    </Link>
                    <Link
                        href="/movie"
                        className={
                            url === "/movie"
                                ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                        }
                    >
                        Movie
                    </Link>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center text-slate-300 hover:text-white hover:bg-slate-600 rounded py-2 px-5 font-bold">
                                Lainnya
                                <ArrowDownIcon
                                    className="ml-2 -mr-1 h-5 w-5 "
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-slate-900 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    {links.map((link, index) => (
                                        /* Use the `active` state to conditionally style the active item. */
                                        <Menu.Item key={index} as={Fragment}>
                                            {({ active }) => (
                                                <Link
                                                    href={link.href}
                                                    className={`${
                                                        active
                                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                                    }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {sidebarOpen && (
                <div className="z-50 lg:hidden absolute top-0 left-0 w-64 bg-slate-900 h-full p-4 shadow">
                    <div className="flex items-center mb-4">
                        {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                        <h1 className="text-white text-xl uppercase">
                            Silver World Pictures
                        </h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-md p-2  w-full"
                    />

                    <div className="h-full  py-4 overflow-y-auto bg-slate-900">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link
                                    href="/"
                                    className={
                                        url === "/"
                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ongoing-anime"
                                    className={
                                        url === "/ongoing-anime"
                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                    }
                                >
                                    Ongoing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/anime-list"
                                    className={
                                        url === "/anime-list"
                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                    }
                                >
                                    Anime List
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/movie"
                                    className={
                                        url === "/movie"
                                            ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                            : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                    }
                                >
                                    Movie
                                </Link>
                            </li>

                            <li>
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left"
                                >
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center text-slate-300 hover:text-white hover:bg-slate-600 rounded py-2 px-5 font-bold">
                                            Lainnya
                                            <ArrowDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 "
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-1 mt-2 w-48 origin-top-right divide-y divide-white rounded-md bg-slate-900 shadow-lg ring-1 ring-white ring-opacity-50 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {links.map((link, index) => (
                                                    /* Use the `active` state to conditionally style the active item. */
                                                    <Menu.Item
                                                        key={index}
                                                        as={Fragment}
                                                    >
                                                        {({ active }) => (
                                                            <Link
                                                                href={link.href}
                                                                className={`${
                                                                    active
                                                                        ? "active text-white bg-slate-600 rounded block py-2 px-5 font-bold"
                                                                        : "text-slate-300 hover:text-white hover:bg-slate-600 block py-2 px-5 font-bold"
                                                                }`}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}
