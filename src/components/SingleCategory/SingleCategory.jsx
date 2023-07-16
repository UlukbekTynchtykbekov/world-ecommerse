import React from 'react';
import "./single-category.scss";

const SingleCategory = () => {

    return (
        <div className="single-category">
            <div className="container">
                <div className="single-category__wrapper">
                    <div className="column single-category__column">
                        <div className="holder">
                            <div className="row sidebar">
                                <div className="filter">
                                    <div className="filter__block">
                                        <h4 className="filter__title">Category</h4>
                                        <ul className="filter__list">
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox" id="bags"/>
                                                <label className="filter__label" htmlFor="bags">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Bags</span>
                                                </label>
                                                <span className="filter__count">
                                                    15
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox" id="beauty"/>
                                                <label className="filter__label" htmlFor="beauty">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Beauty</span>
                                                </label>
                                                <span className="filter__count">
                                                    2
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox" id="clothing"/>
                                                <label className="filter__label" htmlFor="clothing">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Clothing</span>
                                                </label>
                                                <span className="filter__count">
                                                    3
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox" id="jewelery"/>
                                                <label className="filter__label" htmlFor="jewelery">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Jewelery</span>
                                                </label>
                                                <span className="filter__count">
                                                    1
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox" id="shoes"/>
                                                <label className="filter__label" htmlFor="shoes">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Shoes</span>
                                                </label>
                                                <span className="filter__count">
                                                    7
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter__block">
                                        <h4 className="filter__title">Activity</h4>
                                        <ul className="filter__list">
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="athletic"/>
                                                <label className="filter__label" htmlFor="athletic">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Athletic</span>
                                                </label>
                                                <span className="filter__count">
                                                    11
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="lounge"/>
                                                <label className="filter__label" htmlFor="lounge">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Lounge</span>
                                                </label>
                                                <span className="filter__count">
                                                    13
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="outdoor"/>
                                                <label className="filter__label" htmlFor="outdoor">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Outdoor</span>
                                                </label>
                                                <span className="filter__count">
                                                    7
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="travel"/>
                                                <label className="filter__label" htmlFor="travel">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Travel</span>
                                                </label>
                                                <span className="filter__count">
                                                    3
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="urban"/>
                                                <label className="filter__label" htmlFor="urban">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Urban</span>
                                                </label>
                                                <span className="filter__count">
                                                    4
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter__block">
                                        <h4 className="filter__title">Brands</h4>
                                        <ul className="filter__list">
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="nike"/>
                                                <label className="filter__label" htmlFor="nike">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Nike</span>
                                                </label>
                                                <span className="filter__count">
                                                    9
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="louisVuitton"/>
                                                <label className="filter__label" htmlFor="louisVuitton">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Louis Vuitton</span>
                                                </label>
                                                <span className="filter__count">
                                                    13
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="hermes"/>
                                                <label className="filter__label" htmlFor="hermes">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Hermes</span>
                                                </label>
                                                <span className="filter__count">
                                                    2
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="gucci"/>
                                                <label className="filter__label" htmlFor="gucci">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Gucci</span>
                                                </label>
                                                <span className="filter__count">
                                                    6
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" id="zara"/>
                                                <label className="filter__label" htmlFor="zara">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Zara</span>
                                                </label>
                                                <span className="filter__count">
                                                    5
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter__block colors">
                                        <h4 className="filter__title">Color</h4>
                                        <ul className="filter__list colors__variant flexitem">
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color" id="cogrey"/>
                                                <label className="colors__circle circle" htmlFor="cogrey"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color" id="coblue"/>
                                                <label className="colors__circle circle" htmlFor="coblue"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color" id="cogreen"/>
                                                <label className="colors__circle circle" htmlFor="cogreen"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color" id="cored"/>
                                                <label className="colors__circle circle" htmlFor="cored"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color" id="colight"/>
                                                <label className="colors__circle circle" htmlFor="colight"></label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter__block">
                                        <h4 className="filter__title">Price</h4>
                                        <div className="filter__byprice byprice">
                                            <div className="byprice__range-track">
                                                <input type="range" value="25000" min="0" max="100000" className="byprice__input"/>
                                            </div>
                                        </div>
                                        <div className="price-range">
                                            <span className="price-range__form">$50</span>
                                            <span className="price-range__to">$500</span>
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

export default SingleCategory;