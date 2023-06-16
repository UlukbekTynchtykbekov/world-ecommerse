import React from 'react';
import "../../styles/profile.scss"

const Profile = () => {
    return (
        <div className="container">
            <div className="profile">
                <div className="">
                    <div className="">
                        <h4 className="">Profile</h4>
                        <span className="">You can update the details.</span>
                    </div>
                    <form className="" onSubmit="">
                        <div className="">
                            <label htmlFor="profile">
                                <img src="" className="" alt="avatar" />
                            </label>
                            <input onChange="" type="file" id='profile' name='profile' />
                        </div>

                        <div className="">
                            <div className="profile__name">
                                <input className="" type="text" placeholder='FirstName' />
                                <input className="" type="text" placeholder='LastName' />
                            </div>

                            <div className="profile__name">
                                <input className="" type="text" placeholder='Mobile No.' />
                                <input className="" type="text" placeholder='Email*' />
                            </div>


                            <input className="" type="text" placeholder='Address' />
                            <button className="" type='submit'>Update</button>
                        </div>

                        <div className="">
                            <span className="">come back later? <button onClick="" className="">Logout</button></span>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Profile;