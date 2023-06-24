import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./header-nav.scss"

const HeaderNav = () => {

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__inner">
                    <a className="trigger nav__trigger" href="#"><span
                        className="trigger__icon icon-lg ri-menu-2-line"></span>
                    </a>
                    <div className="nav__left">
                        <div className="logo">
                            <a className="logo__link" href="">
                                <span className="logo__circle"></span>.Store
                            </a>
                        </div>
                        <nav className="navigations">
                            <Navigation />
                        </nav>
                    </div>
                    <div className="right nav__right">
                        <ul className="package">
                            <li className="package__item">
                                <a className="package__link" href="">
                                        <span className="package__icon icon-lg">
                                            <i className="ri-heart-line"></i>
                                        </span>
                                    <span className="fly-item package__fly-item">
                                            <span className="package__number">
                                                0
                                            </span>
                                        </span>
                                </a>
                            </li>
                            <li className="package__item">
                                <a className="package__link" href="">
                                        <span className="package__icon icon-lg">
                                            <i className="ri-shopping-cart-line"></i>
                                            <span className="fly-item package__fly-item">
                                            <span className="package__number">
                                                0
                                            </span>
                                        </span>
                                        </span>
                                    <span className="package__text">
                                            <span className="package__total">Total</span>
                                            <span className="package__total-number">$0.00</span>
                                        </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;