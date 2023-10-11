import Navbar from "@/Components/Admin/Navbar";
import ScrollToTopButton from "@/Components/Admin/ScrollToTopButton";
import Sidebar from "@/Components/Admin/Sidebar";
import React from "react";

const Main = ({ children }) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Navbar />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        {children}
                        <ScrollToTopButton />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Main;
