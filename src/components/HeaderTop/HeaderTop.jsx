import React from 'react';
import TopNavigations from "../TopNavigations/TopNavigations";
import "./header-top.scss";

const HeaderTop = () => {

    return (
        <div className="top">
            <div className="container">
                <TopNavigations />
            </div>
        </div>
    );
};

export default HeaderTop;