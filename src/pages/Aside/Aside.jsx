import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AsideNavigation from "../../components/AsideNavigation/AsideNavigation";
import AsideTopNav from "../../components/AsideTopNav/AsideTopNav";
import AsideDepartments from "../../components/AsideDepartments/AsideDepartments";
import "../../styles/aside.scss"
import {menuActions} from "../../features/menuSlice";

const Aside = () => {
    const sidebarRef = useRef(null);
    const {showMenu} = useSelector(state => state.showMenu)
    const dispatch = useDispatch();

    //We have to fix it
    function toggleSidebar() {
        sidebarRef.current.classList.toggle("expand")
    }

    function closeMenu () {
        dispatch(menuActions.closeMenu())
    }

    return (
        <aside className={showMenu ? "off show-menu" : "off"}>
            <div className="off__canvas canvas">
                <div className="canvas__head">
                    <div className="logo canvas__logo">
                        <a className="logo__link" href="">
                            <span className="logo__circle canvas__circle"></span>.Store
                        </a>
                    </div>
                    <div onClick={closeMenu} className="close canvas__close" href="#"><i className="ri-close-line"></i></div>
                </div>
                <AsideDepartments sidebarRef={sidebarRef} toggleSidebar={toggleSidebar}  />
                <AsideNavigation />
                <AsideTopNav />
            </div>
        </aside>
    );
};

export default Aside;