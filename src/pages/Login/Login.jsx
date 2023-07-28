import React from 'react';
import Helmet from "../../layout/Helmet";
import {Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <Helmet title="Login">
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 2000,
                    style: {
                        height: "40px"
                    }
                }}
            />
            <div className="register">
                <div className="container">
                    <div className="register__wrapper">
                        <div className="register__back back">
                            <span className="back__icon">
                                <i className="ri-arrow-left-line"></i>
                            </span>
                        </div>
                        <div className="register__glass">
                            <div className="register__head">
                                <h4 className='register__title'>Login</h4>
                                <span className='register__subtitle'>
                                    Explore More by connecting with us.
                                </span>
                            </div>

                            <form className="form">
                                <div className="form__fields">
                                    <input  className="form__input" type="text" placeholder='Email*' />
                                    <input  className="form__input" type="text" placeholder='Password*' />
                                    <button className="form__button" type='submit'>Register</button>
                                </div>

                                <div className="form__exist">
                                    <span className='form__question'>Not a Member? <Link className='form__link' to="/register">Register Now</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Login;