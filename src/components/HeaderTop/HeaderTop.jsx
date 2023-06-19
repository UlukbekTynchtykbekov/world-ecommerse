import React from 'react';
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className="top header__top">
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
    );
};

export default HeaderTop;