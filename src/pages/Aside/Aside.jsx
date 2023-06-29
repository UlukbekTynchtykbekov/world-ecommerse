import React from 'react';
import AsideNavigation from "../../components/AsideNavigation/AsideNavigation";
import AsideTopNav from "../../components/AsideTopNav/AsideTopNav";
import AsideDepartments from "../../components/AsideDepartments/AsideDepartments";
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
                <AsideDepartments />
                <AsideNavigation />
                <AsideTopNav />
            </div>
        </aside>
    );
};

export default Aside;