import React from 'react';
import {Link} from "react-router-dom";
import apparel4 from "../../assets/products/apparel4.jpg"
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__nav">
                <div className="container">
                    <div className="header__inner flexitem">
                        <a className="trigger desktop-hide" href="#"><span
                            className="bar__icon icon-lg ri-menu-2-line"></span></a>
                        <div className="left flexitem">
                            <div className="logo">
                                <a className="logo__link" href="">
                                    <span className="logo__circle"></span>.Store
                                </a>
                            </div>
                            <nav className="nav nav-mobile">
                                <ul className="flexitem nav__second-links">
                                    <li className="nav__item"><a className="nav__link" href="#">Home</a></li>
                                    <li className="nav__item"><a className="nav__link" href="#">Shop</a></li>
                                    <li className="nav__item child">
                                        <a className="nav__link" href="#">Women
                                            <span className="icon-sm">
                                                <i className="ri-arrow-down-s-line"></i>
                                            </span>
                                        </a>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="mega__wrapper">
                                                    <div className="flexcol mega__col">
                                                        <div className="row">
                                                            <h4 className="mega__title">Women's Clothing</h4>
                                                            <ul className="mega__list">
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Dresses</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Top & Tees</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Jackets &
                                                                    Coats</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Pants & Capris</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Sweaters</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Costumers</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Hodies &
                                                                    Sweatshirts</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Pajamas &
                                                                    Robes</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Shorts</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Swimwear</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol mega__col">
                                                        <div className="row">
                                                            <h4 className="mega__title">Jewelry</h4>
                                                            <ul className="mega__list">
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Accessories</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Bags & Purses</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Necklaces</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Rings</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Earrings</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Bracelets</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Body Jewelry</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol mega__col">
                                                        <div className="row">
                                                            <h4 className="mega__title">Beauty</h4>
                                                            <ul className="mega__list">
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Bath
                                                                    Accessories</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Makeup &
                                                                    Cosmetics</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Skin Care</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Hair Care</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Essential Oils</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Fragrances</a>
                                                                </li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Soaps & Bath
                                                                    Bombs</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Face Masks &
                                                                    Coverings</a></li>
                                                                <li className="mega__item"><a className="mega__link"
                                                                                              href="">Spa Kits &
                                                                    Gifts</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol mega__col">
                                                        <div className="row">
                                                            <h4 className="mega__title">Top Brands</h4>
                                                            <ul className="mega__list mega__list-brands">
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Nike</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Louis Vuitton</a>
                                                                </li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Hermes</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Gucci</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Zalando</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Tiffany</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Zara</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">H&M</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Cartier</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Chanel</a></li>
                                                                <li className="mega__item mega__item-width"><a
                                                                    className="mega__link" href="">Hurley</a></li>
                                                            </ul>
                                                            <a className="view-all mega__view-all" href="">View all brands <i className="ri-arrow-right-line"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products mega__products">
                                                        <div className="products__row">
                                                            <div className="products__media">
                                                                <div className="products__thumbnail cover">
                                                                    <a className="products__image-cover" href="">
                                                                        <img className="cover__img" src={apparel4} alt="apparel4"/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="products__text-content">
                                                                <h4 className="products__pop">Most Wanted!</h4>
                                                                <a className="primary-button products__button" href="">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav__item"><a className="nav__link" href="#">Men</a></li>
                                    <li className="nav__item">
                                        <a className="nav__link" href="#">Sports
                                            <div className="fly-item nav__fly-item">
                                                <span className="fly-item__span">New!</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right header__right">
                            <ul className="wishlist right__second-links">
                                <li className="wishlist__item">
                                    <a className="wishlist__link mobile-hide" href="">
                                        <span className="wishlist__icon icon-lg">
                                            <i className="ri-heart-line"></i>
                                        </span>
                                        <span className="fly-item wishlist__fly-item">
                                            <span className="wishlist__item-number">
                                                0
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li className="cart">
                                    <a className="cart__link" href="">
                                        <span className="cart__icon icon-lg">
                                            <i className="ri-shopping-cart-line"></i>
                                            <span className="fly-item cart__fly-item">
                                            <span className="cart__item-number">
                                                0
                                            </span>
                                        </span>
                                        </span>
                                        <span className="cart__text">
                                            <span className="cart__mini-text">Total</span>
                                            <span className="cart__total">$0.00</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__main mobile-hide">
                <div className="container">
                    <div className="category flexitem">
                        <div className="left category__left">
                            <div className="left__dpt-cat">
                                <div className="left__dpt-head">
                                    <div className="left__main-text">
                                        All Departments
                                    </div>
                                    <div className="mini-text left__mini-text mobile-hide">
                                        Total 1059 Products
                                    </div>
                                    <a className="left__trigger mobile-hide" href="#">
                                        <i className="ri-menu-3-line ri-xl"></i>
                                    </a>
                                </div>
                                <div className="dpt-menu">
                                    <ul className="dpt-menu__dpt-links second-links">
                                        <li className="dpt-menu__list has-child child-beauty">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-bear-smile-line"></i>
                                                </span>
                                                Beauty
                                                <span className="dpt-menu__icon  icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                            </a>
                                            <ul className="child-beauty__child">
                                                <li className="dtp-menu__list-item"><a href="#">Makeup</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Skin Care</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Hare Care</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Fragrance</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Foot & Hand Care</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Tools & Accessories</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Shave & Hair Removal</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Personal Care</a></li>
                                            </ul>
                                        </li>
                                        <li className="dpt-menu__list has-child child-electronic">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-bluetooth-connect-line"></i>
                                                </span>
                                                Electronics
                                                <span className="dpt-menu__icon  icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                            </a>
                                            <ul className="child-electronic__child">
                                                <li className="dtp-menu__list-item"><a href="#">Camera</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Cell Phones</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Computers</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">GPS & Navigation</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Headphones</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Home Audio</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Television</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Video Projectors</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Wearable Technology</a></li>
                                            </ul>
                                        </li>
                                        <li className="dpt-menu__list has-child child-fashion">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-t-shirt-air-line"></i>
                                                </span>
                                                Women's Fashion
                                                <span className="dpt-menu__icon  icon-sm">
                                                    <i className="ri-arrow-right-s-line"></i>
                                                </span>
                                            </a>
                                            <ul className="child-fashion__child">
                                                <li className="dtp-menu__list-item"><a href="#">Clothing</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Shoes</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Jewelry</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Watches</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Handbags</a></li>
                                                <li className="dtp-menu__list-item"><a href="#">Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-shirt-line"></i>
                                                </span>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-user-5-line"></i>
                                                </span>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-user-6-line"></i>
                                                </span>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-heart-pulse-line"></i>
                                                </span>
                                                Health & Household
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list has-child child-home-kit">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-home-8-line"></i>
                                                </span>
                                                Home & Kitchen
                                                <span className="dpt-menu__icon  icon-sm">
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
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-android-line"></i>
                                                </span>
                                                Pets & Supplies
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list">
                                            <a className="dpt-menu__item" href="">
                                                <span className="dpt-menu__icon  icon-lg">
                                                    <i className="ri-basketball-line"></i>
                                                </span>
                                                Sports
                                            </a>
                                        </li>
                                        <li className="dpt-menu__list">
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
                        <div className="right category__right">
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
        </header>
    );
};

export default Header;