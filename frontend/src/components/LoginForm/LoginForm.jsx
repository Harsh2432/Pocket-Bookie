import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-form-container">

                <Link to='/' id='back-to-homepage' className="fas fa-backward"></Link>

                <form action="">
                    <h3>sign in</h3>
                    <span>username</span>
                    <input type="email" name="" className="box" placeholder="enter your email" id=""></input>
                    <span>password</span>
                    <input type="password" name="" className="box" placeholder="enter your password" id=""></input>
                    <div className="checkbox">
                        <input type="checkbox" name="" id="remember-me"></input>
                        <label htmlFor="remember-me"> remember me</label>
                    </div>
                    <input type="submit" value="sign in" className="btn"></input>
                    <p>forget password ? <a href="#">click here</a></p>
                    <p>don't have an account ? <Link to='/register'>create account</Link></p>
                </form>

            </div>
        );
    };
};

export default LoginForm;