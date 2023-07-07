import React from 'react';
import SecTop from "../SecTop/SecTop";
import Trending1 from "../../assets/products/apparel4.jpg";
import Shoe1 from "../../assets/products/shoe1.jpg";
import Trending2 from "../../assets/products/apparel3.jpg";
import Trending3 from "../../assets/products/apparel2.jpg";
import Trending4 from "../../assets/products/apparel1.jpg";
import Home1 from "../../assets/products/home1.jpg";
import Home3 from "../../assets/products/home3.jpg";
import Home2 from "../../assets/products/home2.jpg";
import Electronic3 from "../../assets/products/electronic3.jpg";
import "./trending.scss";

const Trending = () => {
    return (
        <div className="trending">
            <div className="container">
                <div className="trending__wrapper">
                    <SecTop title="Trending Products"/>
                    <div className="trending__column">
                        <div className="trending__inner flexwrap">
                            <div className="products big">
                                <div className="products__item big__item">
                                    <div className="products__offer">
                                        <p className="products__end">Offer ends at</p>
                                        <ul className="products__timeList">
                                            <li className="products__time">1</li>
                                            <li className="products__time">15</li>
                                            <li className="products__time">27</li>
                                            <li className="products__time">60</li>
                                        </ul>
                                    </div>
                                    <div className=" products__media big__media">
                                        <div className="media__image image">
                                            <a className="products__link" href="">
                                                <img className="products__image" src={Trending1} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                31%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (2,548)
                                            </span>
                                        </div>
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Happy Sailed Women's Summer Boho
                                                Floral</a>
                                        </h3>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                        </div>
                                        <div className="content__stock stock mini-text">
                                            <div className="stock__qty">
                                                <span className="qty__span">Stock: <strong
                                                    className="qty__available">107</strong></span>
                                                <span className="qty__span">Sold: <strong
                                                    className="qty__sold">3,459</strong></span>
                                            </div>
                                            <div className="stock__bar bar">
                                                <div className="bar__available"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products mini">
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href="">
                                                <img className="products__image" src={Shoe1} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Men Slip On Shoes Casual with Arch
                                                Support Insoles</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (2,548)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">2975 sold</p>
                                            <p className="info__shipping">Free Shipping</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href="">
                                                <img className="products__image" src={Trending4} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Under Armour Men's Tech</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (2,548)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $56.50
                                            </span>
                                            <span className="price__old mini-text">
                                                $675.50
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">2584 sold</p>
                                            <p className="info__shipping">Free Shipping</p>
                                            <p className="info__stock-danger">Stock: 7 left</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href="">
                                                <img className="products__image" src={Home1} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Vonanda Velvet Sofa Couch</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (1,559)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $469.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $6755.99
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">2151 sold</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href="">
                                                <img className="products__image" src={Electronic3} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Wireless Headphones Over Ear</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (1,411)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $99.98
                                            </span>
                                            <span className="price__old mini-text">
                                                $125.98
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">1843 sold</p>
                                            <p className="info__shipping">Free Shipping</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products mini">
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__image" src={Trending2} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Black Women's Coat Dress</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (2,548)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">2975 sold</p>
                                            <p className="info__shipping">Free Shipping</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__image" src={Trending3} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Women's Lightweight Knitting</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (994)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $37.50
                                            </span>
                                            <span className="price__old mini-text">
                                                $645.50
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">1267 sold</p>
                                            <p className="info__shipping">Free Shipping</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__image" src={Home2} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Dimmable Ceiling Light Modern</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (543)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $279.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $499.99
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">995 sold</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__item products__mini-item">
                                    <div className="products__media products__media-mini">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__image" src={Home3} alt=""/>
                                            </a>
                                        </div>
                                        <div className="products__hover-able">
                                            <ul className="products__hover-list">
                                                <li className="products__hover-item active">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="products__hover-item">
                                                    <a className="products__hover-link" href=""><i
                                                        className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="products__discount circle">
                                            <span className="products__percentage">
                                                32%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="products__content content">
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Modern Storage Cabinet with Door</a>
                                        </h3>
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (335)
                                            </span>
                                        </div>
                                        <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                            <span className="price__old mini-text">
                                                $159.98
                                            </span>
                                        </div>
                                        <div className="content__info info mini-text">
                                            <p className="info__sold">758 sold</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;