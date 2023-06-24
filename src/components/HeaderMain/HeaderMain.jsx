import React from 'react';
import Categories from "../Categories/Categories";
import "./header-main.scss"

const HeaderMain = () => {
    return (
        <div className="main header__main">
            <div className="container">
                <div className="categories">
                    <div className="category categories__left">
                        <Categories />
                    </div>
                    <div className="right categories__right">
                        <div className="search">
                            <form className="search__form">
                                <span className="search__icon icon-lg "><i className="ri-search-line"></i></span>
                                <input className="search__input" type="search" placeholder="Search for products"/>
                                <button className="search__btn" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;