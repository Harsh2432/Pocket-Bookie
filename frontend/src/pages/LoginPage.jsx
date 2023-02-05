import React from 'react';
import '../App.css';
import LoginForm from '../components/LoginForm/LoginForm';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='LoginPage'>
                <LoginForm />
            </div>
        );
    };
};

export default LoginPage;