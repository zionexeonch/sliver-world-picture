import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "@/Layouts/Admin/Main";

const Admin = ({ title }) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={title} />
            <div className="container mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-5">
                    Welcome to Admin Dashboard
                </h1>
                <div className="bg-white p-6 rounded shadow-md">
                    {/* Admin Page Content */}
                </div>
            </div>
        </>
    );
};
Admin.layout = (page) => <Main children={page} />;
export default Admin;
