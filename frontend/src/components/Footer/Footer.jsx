import React from "react";
import '../../App.css';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>our locations</h3>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> india </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> USA </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> russia </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> france </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> japan </a>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> africa </a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> featured </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> arrivals </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> reviews </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> blogs </a>
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        <a href="#"> <i className="fas fa-arrow-right"></i> account info </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> ordered items </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> privacy policy </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> payment method </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> our serivces </a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                        <a href="#"> <i className="fas fa-phone"></i> +098-765-4321 </a>
                        <a href="#" className="gmail"> <i className="fas fa-envelope"></i> bookly@gmail.com </a>
                        <img src={require("../../assets/worldmap.png")} className="map" alt=""></img>
                    </div>

                </div>

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-pinterest"></a>
                </div>
                <div className="credit"> copyright © 2023 <a href="#" alt=""><span>bookly</span></a> | all rights reserved! </div>

            </section>
        );
    };
};

export default Footer;