import React from 'react';
import {Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Profile from "../../assets/profile.png"
import Helmet from "../../layout/Helmet";
import "../../styles/register.scss"

const Register = () => {
    return (
        <Helmet title="Register">
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
                        <div className="register__glass">
                            <div className="register__head">
                                <h4 className='register__title'>Register</h4>
                                <span className='register__subtitle'>
                                    Happy to join you!
                                </span>
                            </div>

                            <form className="form">
                                <div className='form__profile'>
                                    <label htmlFor="profile">
                                        <img className="form__img" src={Profile} alt="avatar"/>
                                    </label>
                                    <input className="form__upload" type="file" id='profile' name='profile' />
                                </div>

                                <div className="form__fields">
                                    <input  className="form__input" type="text" placeholder='Email*' />
                                    <input  className="form__input" type="text" placeholder='First Name*' />
                                    <input  className="form__input" type="text" placeholder='Last Name*' />
                                    <input  className="form__input" type="text" placeholder='Password*' />
                                    <input  className="form__input" type="text" placeholder='Confirm Password*' />
                                    <input  className="form__input" type="text" placeholder='Phone Number*' />
                                    <button className="form__button" type='submit'>Register</button>
                                </div>

                                <div className="form__exist">
                                    <span className='form__question'>Already Register? <Link className='form__link' to="/login">Login Now</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Register;