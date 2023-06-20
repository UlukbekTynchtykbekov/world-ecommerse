import React from 'react';
import bgImage1 from "../../assets/menu/menu_bg1.jpg"
import "./header-main.scss"

const HeaderMain = () => {
    return (
        <div className="main header__main">
            <div className="container">
                <div className="categories">
                    <div className="category categories__left">
                        <div className="category__cat">
                            <div className="category__head">
                                <div className="category__text">
                                    All Departments
                                </div>
                                <div className="mini-text category__mini-text">
                                    Total 1059 Products
                                </div>
                                <a className="category__trigger" href="#">
                                    <i className="ri-menu-3-line ri-xl"></i>
                                </a>
                            </div>
                            <div className="menu category__menu">
                                <ul className="menu__list">
                                    <li className="menu__item child">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-bear-smile-line"></i>
                                                </span>
                                            Beauty
                                            <span className="menu__icon icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                        </a>
                                        <div className="child__item">
                                            <img src={bgImage1} alt=""/>
                                            <ul className="child__list">
                                                <li className="child__category"><a className="child__link" href="#">Makeup</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Skin Care</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Hare Care</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Fragrance</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Foot & Hand Care</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Tools & Accessories</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Shave & Hair Removal</a></li>
                                                <li className="child__category"><a className="child__link" href="#">Personal Care</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu__item child child-electronic">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-bluetooth-connect-line"></i>
                                                </span>
                                            Electronics
                                            <span className="menu__icon  icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                        </a>
                                        {/*<ul className="child-electronic__child">*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Camera</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Cell Phones</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Computers</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">GPS & Navigation</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Headphones</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Home Audio</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Television</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Video Projectors</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Wearable Technology</a></li>*/}
                                        {/*</ul>*/}
                                    </li>
                                    <li className="menu__item child child-fashion">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon icon-lg">
                                                    <i className="ri-t-shirt-air-line"></i>
                                                </span>
                                            Women's Fashion
                                            <span className="menu__icon icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                        </a>
                                        {/*<ul className="child-fashion__child">*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Clothing</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Shoes</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Jewelry</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Watches</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Handbags</a></li>*/}
                                        {/*    <li className="dtp-menu__list-item"><a href="#">Accessories</a></li>*/}
                                        {/*</ul>*/}
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-shirt-line"></i>
                                                </span>
                                            Men's Fashion
                                        </a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-user-5-line"></i>
                                                </span>
                                            Girl's Fashion
                                        </a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-user-6-line"></i>
                                                </span>
                                            Boy's Fashion
                                        </a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon  icon-lg">
                                                    <i className="ri-heart-pulse-line"></i>
                                                </span>
                                            Health & Household
                                        </a>
                                    </li>
                                    <li className="menu__item child child-home-kit">
                                        <a className="menu__link" href="">
                                                <span className="menu__icon icon-lg">
                                                    <i className="ri-home-8-line"></i>
                                                </span>
                                            Home & Kitchen
                                            <span className="menu__icon icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                        </a>
                                        <div className="kit">
                                            <div className="flexcol">
                                                <div className="row">
                                                    <h4><a href="">Kitchen & Dining</a></h4>
                                                    <ul className='child-home-kit__child'>
                                                        <li className="dtp-menu__list-item"><a href="#">Kitchen</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Dining Room</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Pantry</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Great Room</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Breakfast Nook</a></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <h4><a href="">Living</a></h4>
                                                    <ul>
                                                        <li className="dtp-menu__list-item"><a href="#">Living Room</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Family Room</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Sunroom</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flexcol">
                                                <div className="row">
                                                    <h4><a href="">Bed & Bath</a></h4>
                                                    <ul>
                                                        <li className="dtp-menu__list-item"><a href="#">Bathroom</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Powder Room</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Bedroom</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Storage &  Closet</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Baby & Kids</a></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <h4><a href="">Utility</a></h4>
                                                    <ul>
                                                        <li className="dtp-menu__list-item"><a href="#">Laundry</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Garage</a></li>
                                                        <li className="dtp-menu__list-item"><a href="#">Mudroom</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flexcol">
                                                <div className="row">
                                                    <h4><a href="">Outdoor</a></h4>
                                                    <ul>
                                                        <li><a href="#">Landscape</a></li>
                                                        <li><a href="#">Patio</a></li>
                                                        <li><a href="#">Deck</a></li>
                                                        <li><a href="#">Pool</a></li>
                                                        <li><a href="#">Backyard</a></li>
                                                        <li><a href="#">Porch</a></li>
                                                        <li><a href="#">Exterior</a></li>
                                                        <li><a href="#">Outdoor Kitchen</a></li>
                                                        <li><a href="#">Front Yard</a></li>
                                                        <li><a href="#">Driveway</a></li>
                                                        <li><a href="#">Poolhouse</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu__item">
                                        <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-android-line"></i>
                                                </span>
                                            Pets & Supplies
                                        </a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-basketball-line"></i>
                                                </span>
                                            Sports
                                        </a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-shield-star-line"></i>
                                                </span>
                                            Best Seller
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right categories__right">
                        <div className="search">
                            <form className="search__form">
                                <span className="icon-lg search__icon"><i className="ri-search-line"></i></span>
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