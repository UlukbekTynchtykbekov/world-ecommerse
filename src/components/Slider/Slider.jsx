import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {fetchPages} from "../../features/pageSlice";
import Image0 from "../../assets/slider/slider0.jpg"
import Image1 from "../../assets/slider/slider1.jpg"
import Image2 from "../../assets/slider/slider2.jpg"
import Image3 from "../../assets/slider/slider3.jpg"
import "./slider.scss"
import "swiper/css";
import "swiper/css/pagination";
import {Link} from "react-router-dom";

const Slider = () => {

    const dispatch = useDispatch();
    const {data: pages} = useSelector(state => state.pages);

    useEffect(() => {
        dispatch(fetchPages())
    }, [])

    return (
        <div className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <Swiper pagination={{clickable: true,}}
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            autoplay={true}
                            className="mySwiper">
                        {
                            pages?.map(page => (
                                <SwiperSlide key={page._id}>
                                    <div className="mySlider">
                                        <div className="mySlider__wrapper">
                                            <div className="slider__slide">
                                                <div className="slider__item">
                                                    <div className="slider__image">
                                                        <img className="slider__img" src={page.banner} alt=""/>
                                                    </div>
                                                    <div className="slider__content text--content">
                                                        <h4 className="slider__text">{page.suggestion}</h4>
                                                        <h2 className="slider__suggestion title">
                                                            <span className="slider__subtitle">{page.title}</span>
                                                            <br/>
                                                            <span className="slider__advert">{page.description}</span>
                                                        </h2>
                                                        <Link to={page.navigateTo} className="primary-button" >Shop Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;