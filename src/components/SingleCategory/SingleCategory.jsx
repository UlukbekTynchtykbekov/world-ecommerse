import React from 'react';
import "./single-category.scss";

const SingleCategory = () => {

    return (
        <div className="single-category">
            <div className="container">
                <div className="single-category__wrapper">
                    <div className="column single-category__column">
                        <div className="single-category__holder">
                            <div className="row single-category__sidebar">
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
                                                <input type="range" min="0" max="100000" className="byprice__input"/>
                                            </div>
                                            <div className="byprice__price-range">
                                                <span className="byprice__form">$50</span>
                                                <span className="byprice__to">$500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section single-category__section">
                                <div className="row section__row">
                                    <div className="section__head">
                                        <div className="breadcrumb">
                                            <ul className="breadcrumb__list flexitem">
                                                <li className="breadcrumb__item">
                                                    <a className="breadcrumb__link" href="#">Home</a>
                                                </li>
                                                <li className="breadcrumb__item">
                                                    <a className="breadcrumb__link" href="#">Women</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="section__page">
                                            <h1 className="section__title">
                                                Women
                                            </h1>
                                        </div>
                                        <div className="section__description">
                                            <p className="section__description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt dolorum necessitatibus quibusdam, reprehenderit sint sunt totam! Accusantium ad alias aperiam at corporis cumque doloribus dolorum earum illo ipsa iusto laboriosam porro quibusdam ratione reprehenderit sed soluta, tempore. Adipisci animi, culpa cupiditate dicta et inventore itaque laboriosam odit optio quam quia quo ullam vero! Consequuntur dicta dignissimos earum excepturi fuga inventore magni perferendis tenetur. Alias corporis ea est nemo obcaecati quos ratione! A, fugiat pariatur!
                                            </p>
                                        </div>
                                        <div className="section__navigation flexitem">
                                            <div className="section__filter desktop-hide">
                                                <a href="" className="section__filter-trigger label">
                                                    <i className="ri-name-2-line ri-2x"></i>
                                                    <span className="section__filter-title">filter</span>
                                                </a>
                                            </div>
                                            <div className="section__sort sort">
                                                <div className="label">
                                                    <span className="mobile-hide">Sort by default</span>
                                                    <div className="desktop-hide">Default</div>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                                <ul className="sort__list">
                                                    <li className="sort__item">Default</li>
                                                    <li className="sort__item">Product Name</li>
                                                    <li className="sort__item">Price</li>
                                                    <li className="sort__item">Brand</li>
                                                </ul>
                                            </div>
                                            <div className="section__perpage perpage mobile-hide">
                                                <div className="label">
                                                    Items 10 perpage
                                                </div>
                                                <div className="desktop-hide">10</div>
                                                <i className="ri-arrow-down-s-line"></i>
                                            </div>
                                            <div className="section__options options">
                                                <div className="label">
                                                    <span className="mobile-hide">Show 10 perpage</span>
                                                    <div className="desktop-hide">10</div>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                                <ul className="options__list">
                                                    <li className="options__item">10</li>
                                                    <li className="options__item">20</li>
                                                    <li className="options__item">30</li>
                                                    <li className="options__item">All</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="products pro flexwrap"></div>
                                <div className="load-more">
                                    <a href="" className="secondary-button">Load more</a>
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