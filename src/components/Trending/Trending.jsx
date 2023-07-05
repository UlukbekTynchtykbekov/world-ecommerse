import React from 'react';
import Trending1 from "../../assets/products/apparel4.jpg"
import Shoe1 from "../../assets/products/shoe1.jpg"
import Trending2 from "../../assets/products/apparel3.jpg"
import "./trending.scss";

const Trending = () => {
    return (
        <div className="trending">
            <div className="container">
                <div className="trending__wrapper">
                    <div className="trending__secTop secTop">
                        <h2 className="secTop__inner">
                            <span className="secTop__circle circle"></span>
                            <span className="secTop__title">Trending Products</span>
                        </h2>
                    </div>
                    <div className="trending__column">
                        <div className="trending__inner flexwrap">
                            <div className="trending__products products big">
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
                                                <img className="products__img" src={Trending1} alt=""/>
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
                                            <div className="stock__qty qty">
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
                            <div className="trending__products products mini">
                                <div className="products__item">
                                    <div className="products__media">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__img"
                                                                                       src={Shoe1} alt=""/>
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
                            </div>
                            <div className="trending__products products mini">
                                <div className="products__item">
                                    <div className="products__media">
                                        <div className="thumbnail">
                                            <a className="products__link" href=""><img className="products__img" src={Trending2} alt=""/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;