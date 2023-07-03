import React from 'react';
import apparel4 from "../../assets/products/apparel4.jpg";
import "./aside-navigation.scss"

const AsideNavigation = () => {
    return (
        <nav className="canvas-nav navigations">
            <ul className="navigations__links">
                <li className="navigations__item"><a className="navigations__link" href="#">Home</a></li>
                <li className="navigations__item"><a className="navigations__link" href="#">Shop</a></li>
                <li className="navigations__item child">
                    <a className="navigations__link" href="#">Women
                        <span className="navigations__icon icon-sm">
                                                <i className="ri-arrow-down-s-line"></i>
                                            </span>
                    </a>
                    <div className="mega canvas-nav__mega">
                        <div className="container">
                            <div className="mega__wrapper">
                                <div className="mega__col">
                                    <div className="mega__row">
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
                                <div className="mega__col">
                                    <div className="mega__row">
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
                                <div className="mega__col">
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
                                <div className="mega__col">
                                    <div className="mega__row">
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
                                        <a className="mega__view-all" href="">View all brands <i className="ri-arrow-right-line"></i></a>
                                    </div>
                                </div>
                                <div className="products mega__products">
                                    <div className="products__row">
                                        <div className="products__media">
                                            <div className="products__thumbnail">
                                                <a className="products__image-cover" href="">
                                                    <img className="products__img" src={apparel4} alt="apparel4"/>
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
                <li className="navigations__item"><a className="navigations__link" href="#">Men</a></li>
                <li className="navigations__item">
                    <a className="navigations__link" href="#">Sports
                        <div className="fly-item navigations__fly-item">
                            <span className="fly-item__span">New!</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default AsideNavigation;