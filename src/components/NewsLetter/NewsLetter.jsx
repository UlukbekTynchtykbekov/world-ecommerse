import React from 'react';
import "./news-letter.scss"

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="newsletter__wrapper">
                    <div className="newsletter__box">
                        <div className="newsletter__content">
                            <h3 className="newsletter__title">Join Our Newsletter</h3>
                            <p className="newsletter__subtitle">Get E-mail about our latest shop and <strong className="newsletter__strong">special offers</strong></p>
                        </div>
                        <div className="search newsletter__search">
                            <form className="search__form">
                                <span className="search__icon icon-lg "><i className="ri-mail-line"></i></span>
                                <input className="search__input" type="mail" placeholder="Your email address" required/>
                                <button className="search__btn" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;