import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Login({ title }) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/login", credentials);
    };
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-slate-400 flex justify-center items-center">
                <div className="absolute w-40 h-40 rounded-xl bg-slate-300 -top-5 left-10 z-0 transform rotate-45 hidden md:block"></div>
                <div className="absolute w-40 h-40 rounded-xl bg-slate-300 bottom-6 right-10 transform rotate-12 hidden md:block"></div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                            Login Admin
                        </h1>
                        {/* <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                            Create an account to enjoy all the services without
                            any ads for free!
                        </p> */}
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="space-y-4 mb-4">
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 w-64 text-xl text-white bg-slate-800 rounded-2xl"
                        >
                            Login
                        </button>
                    </form>
                    <Link
                        href="/"
                        className="py-3 w-64 text-xl text-white bg-slate-800 flex items-center justify-center mt-4 rounded-2xl space-x-2"
                    >
                        <ArrowLeftCircleIcon className="h-6" />
                        <span>Kembali</span>
                    </Link>
                </div>
                <div className="w-40 h-40 absolute bg-slate-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div className="w-20 h-40 absolute bg-slate-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>
        </>
    );
}
