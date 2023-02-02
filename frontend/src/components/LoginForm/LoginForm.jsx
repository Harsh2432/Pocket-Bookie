import React from 'react';
import '../../App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.closeLogin = this.closeLogin.bind(this);
    };
    closeLogin() {
        const loginForm = document.querySelector('.login-form-container');
        const closeLoginBtn = document.querySelector('#close-login-btn');
        closeLoginBtn.addEventListener('click', () => {
            console.log(loginForm.classList);
            loginForm.classList.remove('active');
        });
    };
    render() {
        return (
            <div className="login-form-container">

                <div id="close-login-btn" onClick={this.closeLogin} className="fas fa-times"></div>

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
                    <p>don't have an account ? <a href="#">create one</a></p>
                </form>

            </div>
        );
    };
};

export default LoginForm;