import React from 'react';
import bgImage1 from "../../assets/menu/menu_bg1.jpg";
import bgImage2 from "../../assets/menu/menu_bg2.jpg";
import bgImage3 from "../../assets/menu/menu_bg3.jpg";
import bgImage4 from "../../assets/menu/menu_bg4.jpg";

const Categories = () => {
    return (
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
            <div className="menu">
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
                            <img className="child__image" src={bgImage1} alt=""/>
                            <ul className="child__list">
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Makeup</a></li>
                                <li className="child__category"><a className="child__link" href="#">Skin
                                    Care</a></li>
                                <li className="child__category"><a className="child__link" href="#">Hare
                                    Care</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Fragrance</a></li>
                                <li className="child__category"><a className="child__link" href="#">Foot
                                    & Hand Care</a></li>
                                <li className="child__category"><a className="child__link" href="#">Tools
                                    & Accessories</a></li>
                                <li className="child__category"><a className="child__link" href="#">Shave
                                    & Hair Removal</a></li>
                                <li className="child__category"><a className="child__link" href="#">Personal
                                    Care</a></li>
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
                        <div className="child__item">
                            <img className="child__image" src={bgImage2} alt=""/>
                            <ul className="child__list">
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Camera</a></li>
                                <li className="child__category"><a className="child__link" href="#">Cell
                                    Phones</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Computers</a></li>
                                <li className="child__category"><a className="child__link" href="#">GPS
                                    & Navigation</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Headphones</a></li>
                                <li className="child__category"><a className="child__link" href="#">Home
                                    Audio</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Television</a></li>
                                <li className="child__category"><a className="child__link" href="#">Video
                                    Projectors</a></li>
                                <li className="child__category"><a className="child__link" href="#">Wearable
                                    Technology</a></li>
                            </ul>
                        </div>
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
                        <div className="child__item">
                            <img className="child__image" src={bgImage3} alt=""/>
                            <ul className="child__list">
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Clothing</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Shoes</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Jewelry</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Watches</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Handbags</a></li>
                                <li className="child__category"><a className="child__link"
                                                                   href="#">Accessories</a></li>
                            </ul>
                        </div>
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
                        <div className="kit child__kit">
                            <img className="kit__image" src={bgImage4} alt=""/>
                            <div className="kit__wrapper">
                                <div className="flexcol">
                                    <div className="kit__row">
                                        <h4 className="kit__main-title">
                                            <a className="kit__main-link" href="">Kitchen & Dining</a>
                                        </h4>
                                        <ul className='kit__list'>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Kitchen</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Dining Room</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Pantry</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Great Room</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Breakfast Nook</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="kit__row">
                                        <h4 className="kit__main-title">
                                            <a className="kit__main-link" href="">Living</a>
                                        </h4>
                                        <ul className="kit__list">
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Living Room</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Family Room</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Sunroom</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flexcol">
                                    <div className="kit__row">
                                        <h4 className="kit__main-title">
                                            <a className="kit__main-link" href="">Bed & Bath</a>
                                        </h4>
                                        <ul className="kit__list">
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Bathroom</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Powder Room</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Bedroom</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Storage &
                                                Closet</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Baby & Kids</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="kit__row">
                                        <h4 className="kit__main-title">
                                            <a className="kit__main-link" href="">Utility</a>
                                        </h4>
                                        <ul className="kit__list">
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Laundry</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Garage</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Mudroom</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flexcol">
                                    <div className="kit__row">
                                        <h4 className="kit__main-title">
                                            <a className="kit__main-link" href="">Outdoor</a>
                                        </h4>
                                        <ul className="kit__list">
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Landscape</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Patio</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Deck</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Pool</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Backyard</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Porch</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Exterior</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Outdoor
                                                Kitchen</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Front Yard</a>
                                            </li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Driveway</a></li>
                                            <li className="kit__category"><a className="kit__link"
                                                                             href="#">Poolhouse</a></li>
                                        </ul>
                                    </div>
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
    );
};

export default Categories;