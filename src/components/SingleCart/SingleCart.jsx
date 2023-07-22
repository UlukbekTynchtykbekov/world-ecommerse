import React from 'react';
import product1 from "../../assets/products/home1.jpg";
import "./single-cart.scss"

const SingleCart = () => {
    return (
        <div className="single-cart">
            <div className="container">
                <div className="single-cart__wrapper">
                    <div className="breadcrumb">
                        <ul className="breadcrumb__list flexitem">
                            <li className="breadcrumb__item">
                                <a className="breadcrumb__link" href="#">Home</a>
                            </li>
                            <li className="breadcrumb__item">
                                <a className="breadcrumb__link" href="#">Cart</a>
                            </li>
                        </ul>
                    </div>
                    <div className="single-cart__page">
                        <h1 className="single-cart__title">Shopping Cart</h1>
                    </div>
                    <div className="products one cart">
                        <div className="flexwrap">
                            <form className="cart__form" action="">
                                <div className="products__item">
                                    <table className="cart__table">
                                        <thead>
                                            <tr>
                                                <th className="cart__list-item">Item</th>
                                                <th className="cart__list-item">Price</th>
                                                <th className="cart__list-item">Qty</th>
                                                <th className="cart__list-item">Subtotal</th>
                                                <th className="cart__list-item"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart__contents">
                                                <td className="flexitem cart__content-item">
                                                    <div className="thumbnail cart__thumbnail">
                                                        <a className="products__link" href="">
                                                            <img className="products__image cart__img" src={product1} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <strong>
                                                            <a href="" className="content__link">Dimable Celling Light Modern</a>
                                                        </strong>
                                                        <p className="content__color">Color: Gold</p>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">$279.99</td>
                                                <td className="cart__content-item">
                                                    <div className="cart__qty-control qty-control flexitem">
                                                        <button className="cart__minus">-</button>
                                                        <input className="cart__input" type="text" value="2" min="1"/>
                                                        <button className="cart__plus">+</button>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">
                                                    $559.98
                                                </td>
                                                <td className="cart__content-item"> <a href="" className="item-remove"><i className="ri-close-line"></i></a></td>
                                            </tr>
                                            <tr className="cart__contents">
                                                <td className="flexitem cart__content-item">
                                                    <div className="thumbnail cart__thumbnail">
                                                        <a className="products__link" href="">
                                                            <img className="products__image cart__img" src={product1} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <strong>
                                                            <a href="" className="content__link">Dimable Celling Light Modern</a>
                                                        </strong>
                                                        <p className="content__color">Color: Gold</p>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">$279.99</td>
                                                <td className="cart__content-item">
                                                    <div className="cart__qty-control qty-control flexitem">
                                                        <button className="cart__minus">-</button>
                                                        <input className="cart__input" type="text" value="2" min="1"/>
                                                        <button className="cart__plus">+</button>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">
                                                    $559.98
                                                </td>
                                                <td className="cart__content-item"> <a href="" className="item-remove"><i className="ri-close-line"></i></a></td>
                                            </tr>
                                            <tr className="cart__contents">
                                                <td className="flexitem cart__content-item">
                                                    <div className="thumbnail cart__thumbnail">
                                                        <a className="products__link" href="">
                                                            <img className="products__image cart__img" src={product1} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <strong>
                                                            <a href="" className="content__link">Dimable Celling Light Modern</a>
                                                        </strong>
                                                        <p className="content__color">Color: Gold</p>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">$279.99</td>
                                                <td className="cart__content-item">
                                                    <div className="cart__qty-control qty-control flexitem">
                                                        <button className="cart__minus">-</button>
                                                        <input className="cart__input" type="text" value="2" min="1"/>
                                                        <button className="cart__plus">+</button>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">
                                                    $559.98
                                                </td>
                                                <td className="cart__content-item"> <a href="" className="item-remove"><i className="ri-close-line"></i></a></td>
                                            </tr>
                                            <tr className="cart__contents">
                                                <td className="flexitem cart__content-item">
                                                    <div className="thumbnail cart__thumbnail">
                                                        <a className="products__link" href="">
                                                            <img className="products__image cart__img" src={product1} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <strong>
                                                            <a href="" className="content__link">Dimable Celling Light Modern</a>
                                                        </strong>
                                                        <p className="content__color">Color: Gold</p>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">$279.99</td>
                                                <td className="cart__content-item">
                                                    <div className="cart__qty-control qty-control flexitem">
                                                        <button className="cart__minus">-</button>
                                                        <input className="cart__input" type="text" value="2" min="1"/>
                                                        <button className="cart__plus">+</button>
                                                    </div>
                                                </td>
                                                <td className="cart__content-item">
                                                    $559.98
                                                </td>
                                                <td className="cart__content-item"> <a href="" className="item-remove"><i className="ri-close-line"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <div className="cart__summary">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;