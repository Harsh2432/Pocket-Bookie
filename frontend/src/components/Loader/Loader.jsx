import React from "react";
import '../../App.css';

class Loader extends React.Component {
    render() {
        return (
            <div className="loader-container">
                <img src={require("../../assets/loader-img.gif")} alt=""></img>
            </div>
        );
    };
};

export default Loader;