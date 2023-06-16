import React from 'react';
import Helmet from "../../layout/Helmet";
import {Toaster} from "react-hot-toast";

const Otp = () => {
    return (
        <Helmet title="OTP">
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
                                <h4 className='register__title'>Verification</h4>
                                <span className='register__subtitle'>
                                    Enter OTP to recover password.
                                </span>
                            </div>

                            <form className="form">
                                <div className="form__wrapper">
                                    <div className="form__fields">
                                    <span className='form__question'>
                                        Enter 6 digit OTP sent to your email address.
                                    </span>
                                        <input className="form__input" type="text" placeholder='OTP*'/>
                                        <button className="form__button" type='submit'>Register</button>
                                    </div>
                                    <div className="form">
                                        <span className='form__question'>Already Register? <button className='form__resend'>Resend</button></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Otp;