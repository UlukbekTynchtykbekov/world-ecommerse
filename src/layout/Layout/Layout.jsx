import React from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Routers />
            </main>
        </>
    );
};
export default Layout;