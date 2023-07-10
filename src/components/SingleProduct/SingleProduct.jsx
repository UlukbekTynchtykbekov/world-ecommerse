import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs, FreeMode} from "swiper";
import {SRLWrapper} from "simple-react-lightbox"
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import image1 from "../../assets/products/shoe1.jpg";
import image2 from "../../assets/products/shoe1-1.jpg";
import image3 from "../../assets/products/shoe1-2.jpg";
import image4 from "../../assets/products/shoe1-3.jpg";
import "./single-product.scss";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="single-product">
                <div className="container">
                    <div className="single-product__wrapper">
                        <Breadcrumb/>
                        <div className="column">
                            <div className="products one">
                                <div className="flexwrap">
                                    <div className="one__row row">
                                        <div className="products__item one__item">
                                            <div className="one__price">
                                        <span className="one__discount">
                                            32%
                                            <br/>
                                            OFF
                                        </span>
                                            </div>
                                            <div className="one__big-image big-image">
                                                <SRLWrapper>
                                                    <Swiper
                                                        loop={true}
                                                        autoHeight={true}
                                                        spaceBetween={10}
                                                        navigation={true}
                                                        thumbs={{swiper: thumbsSwiper}}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper2"
                                                    >
                                                        <SwiperSlide>
                                                            <div className="big-image__wrapper">
                                                                <div className="big-image__show">
                                                                    <a href={image1} className="big-image__link">
                                                                        <img className="big-image__img img" src={image1}
                                                                             alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="big-image__wrapper">
                                                                <div className="big-image__show">
                                                                    <a href={image2} className="big-image__link">
                                                                        <img className="big-image__img img" src={image2}
                                                                             alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="big-image__wrapper">
                                                                <div className="big-image__show">
                                                                    <a href={image3} className="big-image__link">
                                                                        <img className="big-image__img img" src={image3}
                                                                             alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="big-image__wrapper">
                                                                <div className="big-image__show">
                                                                    <a href={image4} className="big-image__link">
                                                                        <img className="big-image__img img" src={image4}
                                                                             alt=""/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </SRLWrapper>
                                            </div>

                                            <div className="one__small-image small-image">
                                                <ul className="small-image__wrapper">
                                                    <Swiper
                                                        onSwiper={setThumbsSwiper}
                                                        loop={true}
                                                        spaceBetween={10}
                                                        slidesPerView={3}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        breakpoints={{
                                                            451: {
                                                                spaceBetween: 32
                                                            }
                                                        }}
                                                        modules={[FreeMode, Navigation, Thumbs]}
                                                        className="mySwiper"
                                                    >
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image1}
                                                                     alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image2}
                                                                     alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image3}
                                                                     alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image4}
                                                                     alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="one__row row">
                                        <div className="one__item">
                                            <h1 className="one__name">
                                                Men Slip On Shoes Casual with Arch Support Insoles
                                            </h1>
                                            <div className="one__content content">
                                                <div className="content__rating one__rating">
                                                    <div className="content__stars one__stars"></div>
                                                    <a className="one__num-review mini-text" href="">2,251</a>
                                                    <a href="" className="one__add-review mini-text">Add Your Review</a>
                                                </div>
                                                <div className="one__stock-squ stock-squ">
                                                    <span className="stock-squ__available">In Stock </span>
                                                    <span className="stock-squ__squ mini-text">
                                                        SQU-881
                                                    </span>
                                                </div>
                                                <div className="price one__price">
                                                    <span className="price__current one__current">
                                                        $80.90
                                                    </span>
                                                    <span className="price__old">
                                                        $119.90
                                                    </span>
                                                </div>
                                                <div className="colors">
                                                    <p className="colors__title">Color</p>
                                                    <div className="colors__variants">
                                                        <form className="colors__form" action="">
                                                            <p className="colors__variant">
                                                                <input className="colors__input" type="radio" name="color" id="cogrey"/>
                                                                <label htmlFor="cogrey" className="colors__circle circle"></label>
                                                            </p>
                                                            <p className="colors__variant">
                                                                <input className="colors__input" type="radio" name="color" id="coblue"/>
                                                                <label htmlFor="coblue" className="colors__circle circle"></label>
                                                            </p>
                                                            <p className="colors__variant">
                                                                <input className="colors__input" type="radio" name="color" id="cogreen"/>
                                                                <label htmlFor="cogreen" className="colors__circle circle"></label>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="sizes">
                                                    <p className="sizes__title">Color</p>
                                                    <div className="sizes__variants">
                                                        <form className="sizes__form" action="">
                                                            <p className="sizes__variant">
                                                                <input className="sizes__input" type="radio" name="size" id="size-41"/>
                                                                <label htmlFor="size-41" className="sizes__circle circle">41</label>
                                                            </p>
                                                            <p className="sizes__variant">
                                                                <input className="colors__input" type="radio" name="size" id="size-42"/>
                                                                <label htmlFor="size-42" className="sizes__circle circle">42</label>
                                                            </p>
                                                            <p className="sizes__variant">
                                                                <input className="colors__input" type="radio" name="size" id="size-43"/>
                                                                <label htmlFor="size-43" className="sizes__circle circle">43</label>
                                                            </p>
                                                            <p className="sizes__variant">
                                                                <input className="colors__input" type="radio" name="size" id="size-44"/>
                                                                <label htmlFor="size-44" className="sizes__circle circle">44</label>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="actions">
                                                    <div className="actions__qty-control flexitem">
                                                        <button className="actions__minus circle">-</button>
                                                        <input className="actions__input" type="text" value="1"/>
                                                        <button className="actions__plus circle">+</button>
                                                    </div>
                                                    <div className="actions__button-cart">
                                                        <button className="actions__btn">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div className="actions__wish-share">
                                                        <ul className="flexitem actions__second-links">
                                                            <li className="actions__link-list">
                                                                <a className="actions__link" href="">
                                                                        <span className="icon-lg">
                                                                            <i className="ri-heart-line"></i>
                                                                        </span>
                                                                </a>
                                                            </li>
                                                            <li className="actions__link-list">
                                                                <a className="actions__link" href="">
                                                                        <span className="icon-lg">
                                                                            <i className="ri-share-line"></i>
                                                                        </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;