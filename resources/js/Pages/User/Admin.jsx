import React, { useEffect } from "react";
import Main from "@/Layouts/Home/Main";
import Aos from "aos";

const Index = (props) => {
    useEffect(() => {
        Aos.refresh();
    }, []);

    return (
        <>
            <Head title={props.title} />
        </>
    );
};

Index.layout = (page) => <Main children={page} />;
export default Index;
