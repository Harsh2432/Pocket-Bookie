import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">

                <div className="profile">
                    <div>
                        <h3>Profile</h3>
                    </div>
                    <div className="flex-1">
                        <div>
                            <span>email</span>
                            <div className="box">jadhavharsh243@gmail.com</div>
                        </div>
                        <div>
                            <span>first name</span>
                            <div className="box">Harsh</div>
                        </div>
                        <div>
                            <span>last name</span>
                            <div className="box">Jadhav</div>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div>
                            <span>gender</span>
                            <div className="radio">
                                <div>
                                    <input type="radio" id="male" name='gender' checked='true'></input>
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
                            <div className="box">8433986740</div>
                        </div>
                    </div>
                    <div className="address">
                        <span>address</span>
                        <div className="box">A/20, Darshan Chawl, Shastri Nagar, Near Gadhri Doctor, Kanjur Marg East, Mumbai - 400042</div>
                    </div>
                    <div className="buttons">
                        <Link to='/editProfile' className="btn">edit profile details</Link>
                        <Link to='/logged' className="btn">go to bookly</Link>
                    </div>
                    <div className="buttons">
                        <Link to='/orders' className="btn">my orders</Link>
                        <Link to='/' className="btn">logout</Link>
                    </div>
                </div>
            </div>
        );
    };
};

export default Profile;