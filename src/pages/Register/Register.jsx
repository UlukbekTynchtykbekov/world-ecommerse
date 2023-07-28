import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form';
import toast, {Toaster} from 'react-hot-toast';
import Profile from "../../assets/profile.png"
import Helmet from "../../layout/Helmet";
import "../../styles/register.scss"

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            hash_password: '',
            confirm_password: '',
            phoneNumber: '',
            profilePicture: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data)
    }

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

                            <form className="form" onClick={handleSubmit(onSubmit)}>
                                <div className='form__profile'>
                                    <label htmlFor="profile">
                                        <img className="form__img" src={Profile} alt="avatar"/>
                                    </label>
                                    <input
                                        className="form__upload"
                                        type="file"
                                        id='profile' name='profile'/>
                                </div>

                                <div className="form__fields">
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            placeholder='Email*'
                                            {...register('firstName', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: 'Invalid email format',
                                                },
                                            })}
                                        />
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            placeholder='First Name*'
                                            {...register('firstName', {
                                                required: 'First name is required',
                                                pattern: {
                                                    value: /^[A-Za-z]+$/,
                                                    message: 'First name must be a string',
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "First name must be more than three letters"
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: "First name must be less than three letters"
                                                },
                                            })}
                                        />
                                        {errors.firstName && <span>{errors.firstName.message}</span>}
                                    </p>
                                    <p className="form__field">
                                        <input
                                            className="form__input"
                                            type="text"
                                            placeholder='Last Name*'
                                            {...register('lastName', {
                                                required: 'First name is required',
                                                pattern: {
                                                    value: /^[A-Za-z]+$/,
                                                    message: 'Last name must be a string',
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "Last name must be more than three letters"
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: "Last name must be less than three letters"
                                                },
                                            })}
                                        />
                                        {errors.lastName && <span>{errors.lastName.message}</span>}
                                    </p>
                                    <p className="form__field">
                                        <input className="form__input" type="text" placeholder='Password*'/>
                                    </p>
                                    <p className="form__field">
                                        <input className="form__input" type="text" placeholder='Confirm Password*'/>
                                    </p>
                                    <p className="form__field">
                                        <input className="form__input" type="text" placeholder='Phone Number*'/>
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