import Navbar from "@/Components/Admin/Navbar";
import ScrollToTopButton from "@/Components/Admin/ScrollToTopButton";
import React from "react";

const Main = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <ScrollToTopButton />
        </>
    );
};

export default Main;
