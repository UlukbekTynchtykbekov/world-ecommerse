import React from 'react';
import Trending4 from "../../assets/products/apparel1.jpg";
import "./features.scss"
import Shoe1 from "../../assets/products/shoe1.jpg";
import Trending1 from "../../assets/products/apparel4.jpg";
import Trending2 from "../../assets/products/apparel3.jpg";
import Trending3 from "../../assets/products/apparel2.jpg";
import Trending5 from "../../assets/products/shoe2.jpg";

const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="features__wrapper">
                    <div className="features__column">
                        <div className="secTop flexitem">
                            <h2 className="secTop__inner">
                                <span className="secTop__circle circle"></span>
                                <span className="secTop__title">Features Products</span>
                            </h2>
                            <div className="secTop__second-links">
                                <a className="view-all" href="#">View all <i className="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="products pro flexwrap">
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
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
                                                25%
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
                                        <a className="content__link" href="">Under Armour Men's Tech</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
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
                                                25%
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
                                        <a className="content__link" href="">Men Slip On Shoes Casual with Arch
                                            Support Insoles</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
                                        <a className="products__link" href="">
                                            <img className="products__image" src={Trending2} alt=""/>
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
                                                25%
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
                                        <a className="content__link" href="">Black Women's Coat Dress</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                               $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
                                        <a className="products__link" href="">
                                            <img className="products__image" src={Trending3} alt=""/>
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
                                    <div className="content__rating">
                                        <div className="content__stars"></div>
                                        <span className="content__text mini-text">
                                                 (994)
                                            </span>
                                    </div>
                                    <h3 className="content__main-links">
                                        <a className="content__link" href="">Women's Lightweight Knitting</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $37.50
                                            </span>
                                        <span className="price__old mini-text">
                                               $645.50
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
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
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
                                        <a className="products__link" href="">
                                            <img className="products__image" src={Trending5} alt=""/>
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
                                                25%
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
                                        <a className="content__link" href="">Under Armour Men's Tech</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
                                        <a className="products__link" href="">
                                            <img className="products__image" src={Trending5} alt=""/>
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
                                                25%
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
                                        <a className="content__link" href="">Under Armour Men's Tech</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="products__item item">
                                <div className="products__media media">
                                    <div className="products__thumbnail thumbnail">
                                        <a className="products__link" href="">
                                            <img className="products__image" src={Trending5} alt=""/>
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
                                                25%
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
                                        <a className="content__link" href="">Under Armour Men's Tech</a>
                                    </h3>
                                    <div className="content__price price">
                                            <span className="price__current">
                                                $129.99
                                            </span>
                                        <span className="price__old mini-text">
                                                $189.98
                                            </span>
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

export default Features;