import React from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";
import Aside from "../../pages/Aside";

const Layout = () => {
    return (
        <>
            <Aside/>
            <Header />
            <main>
                <Routers />
            </main>
        </>
    );
};
export default Layout;