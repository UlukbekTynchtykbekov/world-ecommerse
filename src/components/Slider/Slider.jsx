import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Image0 from "../../assets/slider/slider0.jpg"
import Image1 from "../../assets/slider/slider1.jpg"
import Image2 from "../../assets/slider/slider2.jpg"
import Image3 from "../../assets/slider/slider3.jpg"
import "./slider.scss"
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <Swiper pagination={{clickable: true,}}
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            autoplay={true}
                            className="mySwiper">
                        <SwiperSlide>
                            <div className="mySlider">
                                <div className="mySlider__wrapper">
                                    <div className="slider__slide">
                                        <div className="slider__item">
                                            <div className="slider__image">
                                                <img className="slider__img" src={Image0} alt=""/>
                                            </div>
                                            <div className="slider__content text--content">
                                                <h4 className="slider__text">Shoes Fashion</h4>
                                                <h2 className="slider__suggestion title">
                                                    <span className="slider__subtitle">Come and Get it!</span>
                                                    <br/>
                                                    <span className="slider__advert">Brand New Shoes</span>
                                                </h2>
                                                <a className="primary-button" href="src/components/Slider">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mySlider">
                                <div className="mySlider__wrapper">
                                    <div className="slider__slide">
                                        <div className="slider__item">
                                            <div className="slider__image">
                                                <img className="slider__img" src={Image1} alt=""/>
                                            </div>
                                            <div className="slider__content text--content">
                                                <h4 className="slider__text">Quick Fashion</h4>
                                                <h2 className="slider__suggestion title">
                                                    <span className="slider__subtitle">Fit Your Wardrobe</span>
                                                    <br/>
                                                    <span className="slider__advert">With Luxury Items</span>
                                                </h2>
                                                <a className="primary-button" href="src/components/Slider">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mySlider">
                                <div className="mySlider__wrapper">
                                    <div className="slider__slide">
                                        <div className="slider__item">
                                            <div className="slider__image">
                                                <img className="slider__img" src={Image2} alt=""/>
                                            </div>
                                            <div className="slider__content text--content">
                                                <h4 className="slider__text">Quick Offer</h4>
                                                <h2 className="slider__suggestion title">
                                                    <span className="slider__subtitle">Wooden Minimal Sofa</span>
                                                    <br/>
                                                    <span className="slider__advert">Extra 50% off</span>
                                                </h2>
                                                <a className="primary-button" href="src/components/Slider">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mySlider">
                                <div className="mySlider__wrapper">
                                    <div className="slider__slide">
                                        <div className="slider__item">
                                            <div className="slider__image">
                                                <img className="slider__img" src={Image3} alt=""/>
                                            </div>
                                            <div className="slider__content text--content">
                                                <h4 className="slider__text">Best Deals</h4>
                                                <h2 className="slider__suggestion title">
                                                    <span className="slider__subtitle">Home Workout Accessories</span>
                                                    <br/>
                                                    <span className="slider__advert">Push The Limit</span>
                                                </h2>
                                                <a className="primary-button" href="src/components/Slider">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;