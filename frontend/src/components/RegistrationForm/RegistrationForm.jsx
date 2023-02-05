import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';

class RegistrationForm extends React.Component {
    render() {
        return (
            <div className="registration-form-container">

                <Link to='/' id='back-to-homepage' className="fas fa-backward"></Link>

                <form action="">
                    <h3>create account</h3>
                    <span>email</span>
                    <input type="email" name="email" className="box" placeholder="enter your email"></input>
                    <span>password</span>
                    <input type="password" name="password" className="box" placeholder="enter your password"></input>
                    <span>confirm password</span>
                    <input type="password" name="confirm-password" className="box" placeholder="enter your password again"></input>
                    <input type="submit" value="sign up" className="btn"></input>
                    <p>already have an account ? <Link to='/login'>sign in</Link></p>
                </form>

            </div>
        );
    };
};

export default RegistrationForm;