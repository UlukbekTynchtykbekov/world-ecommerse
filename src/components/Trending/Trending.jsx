import React, {useEffect} from 'react';
import SecTop from "../SecTop/SecTop";
import {useDispatch, useSelector} from "react-redux";
import {fetchOffer} from "../../features/offerSlice";
import "./trending.scss";

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const Trending = () => {

    const dispatch = useDispatch();
    const {data: offers} = useSelector(state => state.offers);

    useEffect(() => {
        dispatch(fetchOffer())
    }, []);

    const sortedOffers = offers ? [...offers].sort((a, b) => b.totalSold - a.totalSold).slice(0,9) : [];

    const [bigItem, ...miniItems] = sortedOffers;
    const miniChunks = chunkArray(miniItems, Math.ceil(miniItems.length / 2));

    return (
        <div className="trending">
            <div className="container">
                <div className="trending__wrapper">
                    <SecTop title="Trending Products"/>
                    <div className="trending__column">
                        <div className="trending__inner flexwrap">
                            {
                                bigItem && (
                                    <div className="products big" key={bigItem._id}>
                                        <div className="products__item big__item" key={bigItem._id}>
                                            <div className="products__offer">
                                                <p className="products__end">Offer ends at</p>
                                                <ul className="products__timeList">
                                                    <li className="products__time">1</li>
                                                    <li className="products__time">15</li>
                                                    <li className="products__time">27</li>
                                                    <li className="products__time">60</li>
                                                </ul>
                                            </div>
                                            <div className=" products__media big__media">
                                                <div className="media__image image">
                                                    <a className="products__link" href="">
                                                        <img className="products__image"
                                                             src={bigItem.variants[0].images[0].url} alt=""/>
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
                                                {bigItem.salePercentage}%
                                            </span>
                                                </div>
                                            </div>
                                            <div className="products__content content">
                                                <div className="content__rating">
                                                    <div className="content__stars"></div>
                                                    <span className="content__text mini-text">
                                                {bigItem.totalRating}
                                            </span>
                                                </div>
                                                <h3 className="content__main-links">
                                                    <a className="content__link" href="">{bigItem.name}</a>
                                                </h3>
                                                <div className="content__price price">
                                            <span className="price__current">
                                                ${bigItem.variants[0].originalPrice}
                                            </span>

                                                    {bigItem.variants[0].discountPrice &&
                                                        <span className="price__old mini-text">
                                                ${bigItem.variants[0].discountPrice}
                                            </span>
                                                    }
                                                </div>
                                                <div className="content__stock stock mini-text">
                                                    <div className="stock__qty">
                                                <span className="qty__span">Stock: <strong
                                                    className="qty__available">{bigItem.totalQuantity}</strong></span>
                                                        <span className="qty__span">Sold: <strong
                                                            className="qty__sold">{bigItem.totalSold}</strong>
                                                            </span>
                                                    </div>
                                                    <div className="stock__bar bar">
                                                        <div className="bar__available"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                miniChunks?.map((miniChunk, chunkIndex) => (
                                    <div className="products mini" key={chunkIndex}>
                                        {
                                            miniChunk?.map((miniProduct, index) => (
                                                <div className="products__item products__mini-item" key={miniProduct._id}>
                                                    <div className="products__media products__media-mini">
                                                        <div className="thumbnail">
                                                            <a className="products__link" href="">
                                                                <img className="products__image"
                                                                     src={miniProduct.variants[0].images[0].url}
                                                                     alt=""/>
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
                                                {miniProduct?.salePercentage}%
                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="products__content content">
                                                        <h3 className="content__main-links">
                                                            <a className="content__link" href="">{miniProduct?.name}</a>
                                                        </h3>
                                                        <div className="content__rating">
                                                            <div className="content__stars"></div>
                                                            <span className="content__text mini-text">
                                                {miniProduct?.totalRating}
                                            </span>
                                                        </div>
                                                        <div className="content__price price">
                                            <span className="price__current">
                                                ${miniProduct?.variants[0].originalPrice}
                                            </span>
                                                            <span className="price__old mini-text">
                                                ${miniProduct?.variants[0].discountPrice}
                                            </span>
                                                        </div>
                                                        <div className="content__info info mini-text">
                                                            <p className="info__sold">{miniProduct?.totalSold} sold</p>
                                                            <p className="info__shipping">Free Shipping</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;