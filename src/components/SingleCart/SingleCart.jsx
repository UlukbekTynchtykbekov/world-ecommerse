import React from 'react';
import product1 from "../../assets/products/home1.jpg";

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
                    <div className="single-cart__title">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="products one cart">
                        <div className="flexwrap">
                            <form className="cart__form" action="">
                                <div className="products__item">
                                    <table className="cart__table">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="flexitem">
                                                    <div className="thumbnail products__thumbnail">
                                                        <a className="products__link" href="">
                                                            <img className="products__image" src={product1} alt=""/>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;