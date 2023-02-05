import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

class EditProfile extends React.Component {
    render() {
        return (
            <div className="edit-profile-container">

                <div className="profile">
                    <div>
                        <h3>Edit Profile Details</h3>
                    </div>
                    <div className="flex-1">
                        <div>
                            <span>email</span>
                            <div className="box">jadhavharsh243@gmail.com</div>
                        </div>
                        <div>
                            <span>first name</span>
                            <input type='text' name="firstName" className="box" placeholder="enter first name"></input>
                        </div>
                        <div>
                            <span>last name</span>
                            <input type='text' name="lastName" className="box" placeholder="enter last name"></input>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div>
                            <span>gender</span>
                            <div className="radio">
                                <div>
                                    <input type="radio" id="male" name='gender'></input>
                                    <label htmlFor="male">&nbsp;male</label>
                                </div>
                                <div>
                                    <input type="radio" id="female" name='gender'></input>
                                    <label htmlFor="female">&nbsp;female</label>
                                </div>
                                <div>
                                    <input type="radio" id="prefer not to say" name='gender'></input>
                                    <label htmlFor="prefer not to say">&nbsp;prefer not to say</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>mobile number</span>
                            <input type='tel' name="mobileNumber" className="box" placeholder="enter mobile number"></input>
                        </div>
                    </div>
                    <div className="address">
                        <span>address</span>
                        <input type='text' name="address" className="box" placeholder="enter address"></input>
                    </div>
                    <div>
                        <Link to='/logged'>
                            <input type="submit" value="save profile details" className="btn"></input>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
};

export default EditProfile;