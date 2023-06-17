import React from 'react';
import {Link} from "react-router-dom";
import apparel4 from "../../assets/products/apparel4.jpg"
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="left">
                            <ul className="flexitem left__main-links">
                                <li className="left__item"><Link className="left__link" to="/">Blog</Link></li>
                                <li className="left__item"><Link className="left__link" to="/">Featured Products</Link>
                                </li>
                                <li className="left__item"><Link className="left__link" to="/">Wishlist</Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul className="flexitem right__main-links">
                                <li className="right__item"><Link className="right__link" to="/">Sign Up</Link></li>
                                <li className="right__item"><Link className="right__link" to="/">My Account</Link></li>
                                <li className="right__item"><Link className="right__link" to="/">Order Tracking</Link>
                                </li>
                                <li className="currency right__item">
                                    <Link className="right__link" to="/">
                                        USD
                                        <span className="right__icon icon-sm">
                                                <i className="ri-arrow-down-s-line"></i>
                                            </span>
                                    </Link>
                                    <ul className="currency__list">
                                        <li className="currency__item">
                                            <Link to="/" className="currency__link current">USD</Link>
                                        </li>
                                        <li className="currency__item">
                                            <Link to="/" className="currency__link">KGZ</Link>
                                        </li>
                                        <li className="currency__item">
                                            <Link to="/" className="currency__link">EUR</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <li className="nav__item">
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
        </header>
    );
};

export default Header;