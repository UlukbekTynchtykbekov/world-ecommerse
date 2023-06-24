import React from 'react';
import Categories from "../../components/Categories/Categories";
import TopNavigations from "../../components/TopNavigations/TopNavigations";
import Navigation from "../../components/Navigation/Navigation";
import "../../styles/aside.scss"

const Aside = () => {

    return (
        <aside className="off desktop-hide">
            <div className="off__canvas canvas">
                <div className="canvas__head">
                    <div className="logo canvas__logo">
                        <a className="logo__link" href="">
                            <span className="logo__circle canvas__circle"></span>.Store
                        </a>
                    </div>
                    <a className="close canvas__close" href="#"><i className="ri-close-line"></i></a>
                </div>
                <div className="canvas__departments category">
                    <Categories />
                </div>
                <nav className="canvas__nav">
                    <Navigation />
                </nav>
                <div className="canvas__nav-top">
                    <TopNavigations />
                </div>
            </div>
        </aside>
    );
};

export default Aside;