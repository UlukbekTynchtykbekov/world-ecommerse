import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import "./header-top.scss";

const HeaderTop = () => {

    const { isAuthenticated } = useSelector(state => state.authMe);

    return (
        <div className="top">
            <div className="container">
                <div className="top__wrapper">
                    <div className="top__left">
                        <ul className="top__links">
                            <li className="top__item"><Link className="top__link" to="/blog">Blog</Link></li>
                            <li className="top__item">
                                <Link className="top__link" to="/features">Featured Products</Link>
                            </li>
                            <li className="top__item"><Link className="top__link" to="/wishlist">Wishlist</Link></li>
                        </ul>
                    </div>
                    <div className="top__right">
                        <ul className="top__links">
                            {isAuthenticated === false && <li className="top__item"><Link className="top__link" to="/login">Sign Up</Link></li>}
                            {isAuthenticated === false && <li className="top__item"><Link className="top__link" to="/register">Sign In</Link></li>}
                            <li className="top__item"><Link className="top__link" to={isAuthenticated ? "/my-account" : "/register"}>My Account</Link></li>
                            <li className="top__item"><Link className="top__link" to="/">Order Tracking</Link></li>
                            <li className="currency top__item">
                                <Link className="top__link" to="/">
                                    USD
                                    <span className="top__icon icon-sm">
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