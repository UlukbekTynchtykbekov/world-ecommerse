import React, {useState} from 'react';
import Routers from "../../routers/Routers";
import Header from "../Header";
import Aside from "../../pages/Aside";
import Footer from "../Footer";
import MenuBottom from "../../components/MenuBottom/MenuBottom";
import SearchBottom from "../../components/SearchBottom/SearchBottom";
import Overlay from "../../components/Overlay/Overlay";

const Layout = () => {
    const [showSearchBottom, setShowSearchBottom] = useState(false);

    return (
        <>
            <Aside/>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />
            <MenuBottom setShowSearchBottom={setShowSearchBottom} />
            <SearchBottom showSearchBottom={showSearchBottom} setShowSearchBottom={setShowSearchBottom} />
            <Overlay />
        </>
    );
};
export default Layout;