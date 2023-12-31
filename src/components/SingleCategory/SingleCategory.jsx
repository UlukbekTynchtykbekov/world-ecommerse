import React, {useRef} from 'react';
import "./single-category.scss";
import Trending4 from "../../assets/products/apparel1.jpg";
import Shoe1 from "../../assets/products/shoe1.jpg";
import Trending2 from "../../assets/products/apparel3.jpg";
import Trending3 from "../../assets/products/apparel2.jpg";
import Trending1 from "../../assets/products/apparel4.jpg";
import Trending5 from "../../assets/products/shoe2.jpg";
import Trending6 from "../../assets/products/shoe3.jpg";
import Trending7 from "../../assets/products/shoe4.jpg";

const SingleCategory = () => {
    const showRef = useRef(null)

    const showMenu = () => {
        setTimeout(() => {
            showRef.current.classList.add("show")
        }, 250);
    }

    document.addEventListener("click", (e) => {
        const isClosest = e.target.closest(".filter");
        if (!isClosest && showRef.current.classList.contains("show")){
            showRef.current.classList.remove("show")
        }
    })

    return (
        <div className="single-category">
            <div className="container">
                <div className="single-category__wrapper">
                    <div className="column single-category__column">
                        <div className="single-category__holder">
                            <div className="row single-category__sidebar">
                                <div ref={showRef} className="single-category__filter filter">
                                    <div className="filter__block">
                                        <h4 className="filter__title">Category</h4>
                                        <ul className="filter__list">
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox"
                                                       id="bags"/>
                                                <label className="filter__label" htmlFor="bags">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Bags</span>
                                                </label>
                                                <span className="filter__count">
                                                    15
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox"
                                                       id="beauty"/>
                                                <label className="filter__label" htmlFor="beauty">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Beauty</span>
                                                </label>
                                                <span className="filter__count">
                                                    2
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox"
                                                       id="clothing"/>
                                                <label className="filter__label" htmlFor="clothing">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Clothing</span>
                                                </label>
                                                <span className="filter__count">
                                                    3
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox"
                                                       id="jewelery"/>
                                                <label className="filter__label" htmlFor="jewelery">
                                                    <span className="filter__checked"></span>
                                                    <span className="filter__category">Jewelery</span>
                                                </label>
                                                <span className="filter__count">
                                                    1
                                                </span>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input" type="checkbox" name="checkbox"
                                                       id="shoes"/>
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
                                                <input className="filter__input colors__input" type="radio" name="color"
                                                       id="cogrey"/>
                                                <label className="colors__circle circle" htmlFor="cogrey"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color"
                                                       id="coblue"/>
                                                <label className="colors__circle circle" htmlFor="coblue"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color"
                                                       id="cogreen"/>
                                                <label className="colors__circle circle" htmlFor="cogreen"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color"
                                                       id="cored"/>
                                                <label className="colors__circle circle" htmlFor="cored"></label>
                                            </li>
                                            <li className="filter__item">
                                                <input className="filter__input colors__input" type="radio" name="color"
                                                       id="colight"/>
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
                                    <div className="cat-head">
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
                                        <div className="cat-head__page">
                                            <h1 className="cat-head__title">
                                                Women
                                            </h1>
                                        </div>
                                        <div className="cat-description">
                                            <p className="cat-description__text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                                                deserunt dolorum necessitatibus quibusdam, reprehenderit sint sunt
                                                totam! Accusantium ad alias aperiam at corporis cumque doloribus dolorum
                                                earum illo ipsa iusto laboriosam porro quibusdam ratione reprehenderit
                                                sed soluta, tempore. Adipisci animi, culpa cupiditate dicta et inventore
                                                itaque laboriosam odit optio quam quia quo ullam vero! Consequuntur
                                                dicta dignissimos earum excepturi fuga inventore magni perferendis
                                                tenetur. Alias corporis ea est nemo obcaecati quos ratione! A, fugiat
                                                pariatur!
                                            </p>
                                        </div>
                                        <div className="cat-navigation flexitem">
                                            <div className="cat-navigation__filter desktop-hide">
                                                <div className="cat-navigation__filter-trigger" onClick={showMenu}>
                                                    <i className="ri-menu-2-line ri-2x"></i>
                                                    <span className="cat-navigation__filter-title">filter</span>
                                                </div>
                                            </div>
                                            <div className="cat-navigation__sort">
                                                <div className="cat-navigation__label label">
                                                    <span className="mobile-hide">Sort by default</span>
                                                    <div className="desktop-hide">Default</div>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                                <ul className="cat-navigation__list">
                                                    <li className="cat-navigation__item">Default</li>
                                                    <li className="cat-navigation__item">Product Name</li>
                                                    <li className="cat-navigation__item">Price</li>
                                                    <li className="cat-navigation__item">Brand</li>
                                                </ul>
                                            </div>
                                            <div className="cat-navigation__perpage mobile-hide">
                                                <div className="cat-navigation__label">
                                                    Items 10 perpage
                                                </div>
                                                <div className="desktop-hide">10</div>
                                            </div>
                                            <div className="cat-navigation__options options">
                                                <div className="cat-navigation__label label">
                                                    <span className="mobile-hide">Show 10 perpage</span>
                                                    <div className="desktop-hide">10</div>
                                                    <i className="ri-arrow-down-s-line"></i>
                                                </div>
                                                <ul className="cat-navigation__list">
                                                    <li className="cat-navigation__item">10</li>
                                                    <li className="cat-navigation__item">20</li>
                                                    <li className="cat-navigation__item">30</li>
                                                    <li className="cat-navigation__item">All</li>
                                                </ul>
                                            </div>
                                        </div>
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
                                                (1,237)
                                            </span>
                                            </div>
                                            <h3 className="content__main-links">
                                                <a className="content__link" href="">Skechers Women's Go Joy Walking Shoe Sneaker</a>
                                            </h3>
                                            <div className="content__price price">
                                            <span className="price__current">
                                                $45.95
                                            </span>
                                                <span className="price__old mini-text">
                                                $64.95
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products__item item">
                                        <div className="products__media media">
                                            <div className="products__thumbnail thumbnail">
                                                <a className="products__link" href="">
                                                    <img className="products__image" src={Trending6} alt=""/>
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
                                                (106)
                                            </span>
                                            </div>
                                            <h3 className="content__main-links">
                                                <a className="content__link" href="">Walking Shoe Sneaker Womens</a>
                                            </h3>
                                            <div className="content__price price">
                                            <span className="price__current">
                                                $139.99
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
                                                    <img className="products__image" src={Trending7} alt=""/>
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
                                                (25)
                                            </span>
                                            </div>
                                            <h3 className="content__main-links">
                                                <a className="content__link" href="">Womens Summer Tosca Shoe</a>
                                            </h3>
                                            <div className="content__price price">
                                            <span className="price__current">
                                                $104.90
                                            </span>
                                                <span className="price__old mini-text">
                                                $189.90
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-more flexcenter">
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