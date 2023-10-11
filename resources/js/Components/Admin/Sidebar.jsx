import React, { useState } from "react";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            <div
                className={`lg:hidden fixed top-0 left-0 h-full bg-gray-200 p-4 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-end mb-4">
                    {/* Tombol close */}
                    <div
                        className="text-2xl cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </div>
                </div>
                {/* Konten Sidebar */}
            </div>
        </>
    );
}
