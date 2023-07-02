import React from 'react';
import Image0 from "../../assets/slider/slider0.jpg"
import Image1 from "../../assets/slider/slider1.jpg"
import Image2 from "../../assets/slider/slider2.jpg"
import Image3 from "../../assets/slider/slider3.jpg"
import "./slider.scss"

const Slider = () => {
    return (
        <div className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <div className="myslider">
                        <div className="myslider__wrapper">
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
                                        <a className="primary-button" href="">Shop Now</a>
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

export default Slider;