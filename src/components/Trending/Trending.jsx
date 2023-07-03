import React from 'react';
import Trending1 from "../../assets/products/apparel4.jpg"
import "./trending.scss";

const Trending = () => {
    return (
        <div className="trending">
            <div className="container">
                <div className="trending__wrapper">
                    <div className="trending__secTop">
                        <h2 className="circle">
                            <span className="circle__item"></span>
                            <span className="circle__title">Trending Products</span>
                        </h2>
                    </div>
                    <div className="trending__column">
                        <div className="trending__inner flexwrap">
                            <div className="trending__row product big">
                                <div className="trending__item">
                                    <div className="trending__offer">
                                        <p className="trending__end">Offer ends at</p>
                                        <ul className="trending__timeList flexcenter">
                                            <li className="trending__time">1</li>
                                            <li className="trending__time">15</li>
                                            <li className="trending__time">27</li>
                                            <li className="trending__time">60</li>
                                        </ul>
                                    </div>
                                    <div className="media">
                                        <div className="media__image">
                                            <a className="media__link" href="">
                                                <img className="media__img" src={Trending1} alt=""/>
                                            </a>
                                        </div>
                                        <div className="trending__hover-able">
                                            <ul className="trending__hover-list">
                                                <li className="trending__hover-item">
                                                    <a className="trending__hover-link" href=""><i className="ri-heart-line"></i>
                                                    </a>
                                                </li>
                                                <li className="trending__hover-item">
                                                    <a className="trending__hover-link" href=""><i className="ri-eye-line"></i>
                                                    </a>
                                                </li>
                                                <li className="trending__hover-item">
                                                    <a className="trending__hover-link" href=""><i className="ri-shuffle-line"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="trending__circle discount flexcenter">
                                            <span className="discount__percentage">
                                                31%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="content__rating">
                                            <div className="content__stars"></div>
                                            <span className="content__text mini-text">
                                                (2,548)
                                            </span>
                                        </div>
                                        <h3 className="content__main-links">
                                            <a className="content__link" href="">Happy Sailed Women's Summer Boho Floral</a>
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
                                                <span className="qty__span">Stock: <strong className="qty__available">107</strong></span>
                                                <span className="qty__span">Sold: <strong className="qty__sold">3,459</strong></span>
                                            </div>
                                            <div className="stock__bar bar">
                                                <div className="bar__available">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="trending__row product mini"></div>
                            <div className="trending__row product mini"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;