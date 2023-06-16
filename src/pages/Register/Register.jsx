import React from 'react';
import {Link} from "react-router-dom";
import Helmet from "../../layout/Helmet";
import "../../styles/register.scss"

const Register = () => {
    return (
        <Helmet title="Register">
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
                                        <img className="form__img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="avatar"/>
                                    </label>
                                    <input className="form__upload" type="file" id='profile' name='profile' />
                                </div>

                                <div className="form__fields">
                                    <input  className="form__input" type="text" placeholder='Email*' />
                                    <input  className="form__input" type="text" placeholder='Username*' />
                                    <input  className="form__input" type="text" placeholder='Password*' />
                                    <button className="form__button" type='submit'>Register</button>
                                </div>

                                <div className="form__exist">
                                    <span className='form__question'>Already Register? <Link className='form__link' to="/">Login Now</Link></span>
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