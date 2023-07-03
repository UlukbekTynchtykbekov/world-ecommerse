import React from 'react';
import Zara from "../../assets/brands/zara.png";
import Samsung from "../../assets/brands/samsung.png";
import Oppo from "../../assets/brands/oppo.png";
import Asus from "../../assets/brands/asus.png";
import Hurley from "../../assets/brands/hurley.png";
import Dng from "../../assets/brands/dng.png";
import "./brands.scss"

const Brands = () => {
    return (
        <div className="brands">
            <div className="container">
                <div className="brands__wrapper flexitem">
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Zara} alt=""/>
                        </a>
                    </div>
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Samsung} alt=""/>
                        </a>
                    </div>
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Oppo} alt=""/>
                        </a>
                    </div>
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Asus} alt=""/>
                        </a>
                    </div>
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Hurley} alt=""/>
                        </a>
                    </div>
                    <div className="brands__item">
                        <a className="brands__link" href="">
                            <img className="brands__image" src={Dng} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;