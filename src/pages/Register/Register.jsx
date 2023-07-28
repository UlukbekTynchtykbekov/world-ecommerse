import React, {useState} from 'react';
import {Link} from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';
import Profile from "../../assets/profile.png"
import Helmet from "../../layout/Helmet";
import "../../styles/register.scss"

const Register = () => {

    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    console.log(formData)
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
                        <div className="back">
                            <span className="back__icon">
                                <i className="ri-arrow-left-line"></i>
                            </span>
                        </div>
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
                                    <input
                                        className="form__upload"
                                        type="file"
                                        id='profile' name='profilePicture'
                                        onChange={(e) => handleInputChange(e)}
                                    />

                                </div>

                                <div className="form__fields">
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="email"
                                            placeholder='Email*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="firstName"
                                            placeholder='First Name*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="lastName"
                                            placeholder='Last Name*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="hash_password"
                                            placeholder='Password*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            name="confirm_password"
                                            placeholder='Confirm Password*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="number"
                                            name="phoneNumber"
                                            placeholder='Phone Number*'
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    </p>
                                    <button className="form__button" type='submit'>Register</button>
                                </div>

                                <div className="form__exist">
                                    <span className='form__question'>Already Register? <Link className='form__link'
                                                                                             to="/login">Login Now</Link></span>
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