import React from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";
import Aside from "../../pages/Aside";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <Aside/>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
        </>
    );
};
export default Layout;