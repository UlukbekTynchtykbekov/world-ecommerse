import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Thumbs, FreeMode} from "swiper";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import image1 from "../../assets/products/shoe1.jpg"
import image2 from "../../assets/products/shoe1-1.jpg"
import image3 from "../../assets/products/shoe1-2.jpg"
import image4 from "../../assets/products/shoe1-3.jpg"
import "./single-product.scss"
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
                                                                <a href="" className="big-image__link">
                                                                    <img className="big-image__img img" src={image1}
                                                                         alt=""/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="big-image__wrapper">
                                                            <div className="big-image__show">
                                                                <a href="" className="big-image__link">
                                                                    <img className="big-image__img img" src={image2}
                                                                         alt=""/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="big-image__wrapper">
                                                            <div className="big-image__show">
                                                                <a href="" className="big-image__link">
                                                                    <img className="big-image__img img" src={image3}
                                                                         alt=""/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="big-image__wrapper">
                                                            <div className="big-image__show">
                                                                <a href="" className="big-image__link">
                                                                    <img className="big-image__img img" src={image4}
                                                                         alt=""/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>

                                                </Swiper>
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
                                                                <img className="small-image__img img" src={image1} alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image2} alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image3} alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <li className="small-image__show">
                                                                <img className="small-image__img img" src={image4} alt=""/>
                                                            </li>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="one__row row">
                                        <div className="one__item"></div>
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