import React from "react";
import '../App.css';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

class RegistrationPage extends React.Component {
    render() {
        return (
            <div className="RegistrationPage">
                <RegistrationForm />
            </div>
        );
    };
};

export default RegistrationPage;