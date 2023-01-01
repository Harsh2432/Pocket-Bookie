import React from 'react';
import './Footer.css';
import HoverImage from "react-hover-image";
import normalFacebook from "../../assets/facebook.png";
import hoverFacebook from "../../assets/facebook-hover.png";
import normalTwitter from "../../assets/twitter.png";
import hoverTwitter from "../../assets/twitter-hover.png";
import normalInstagram from "../../assets/instagram.png";
import hoverInstagram from "../../assets/instagram-hover.png";
import normalPinterest from "../../assets/pinterest.png";
import hoverPinterest from "../../assets/pinterest-hover.png";

class Footer extends React.Component {
    render() {
        return (
            <div className='footer-body'>
                <div className='footer'>
                    <div className='footer-containers'>
                        <div className='logo-container'>
                            <a href='#pocketbookie'>
                                <img src={require('../../assets/PocketBookie.png')} alt='logo' className='footer-logo'></img>
                            </a>
                            <div className='address'>
                                <div>Kanjur Marg,</div>
                                <div>Mumbai 400042</div>
                            </div>
                            <a href='https://goo.gl/maps/zqCeqdsysybkErJv8' className='maps'>SHOW ON MAP</a>
                            <div className='share-options'>
                                <HoverImage src={normalFacebook} hoverSrc={hoverFacebook} />
                                <HoverImage src={normalTwitter} hoverSrc={hoverTwitter} />
                                <HoverImage src={normalInstagram} hoverSrc={hoverInstagram} />
                                <HoverImage src={normalPinterest} hoverSrc={hoverPinterest} />
                            </div>
                        </div>
                        <div class="footer-vl"></div>
                        <div className='help-options-container'>
                            <div className='help-container'>
                                <div className='text-help'>Need Help</div>
                                <div className='text-number'>+91-84339-86740</div>
                                <div className='timings'>
                                    <div>Monday - Friday: 9:00 - 21:00</div>
                                    <div>Saturday: 11:00 - 17:00</div>
                                </div>
                                <div className='text-email'>
                                    <a href='mailto:jadhavharsh243@gmail.com'>jadhavharsh243@gmail.com</a>
                                </div>
                            </div>
                            <div className='options-container'>
                                <div className='explore-container'>
                                    <div className='text-explore'>Explore</div>
                                    <ul className='explore-options'>
                                        <a href='#about'>
                                            <li>About Us</li>
                                        </a>
                                        <a href='#sitemap'>
                                            <li>Sitemap</li>
                                        </a>
                                        <a href='#bookmarks'>
                                            <li>Bookmarks</li>
                                        </a>
                                        <a href='#join'>
                                            <li>Join Us</li>
                                        </a>
                                    </ul>
                                </div>
                                <div className='service-container'>
                                    <div className='text-service'>Our Service</div>
                                    <ul className='service-options'>
                                        <a href='#help'>
                                            <li>Help Center</li>
                                        </a>
                                        <a href='#returns'>
                                            <li>Returns</li>
                                        </a>
                                        <a href='#recalls'>
                                            <li>Product Recalls</li>
                                        </a>
                                        <a href='#accessibility'>
                                            <li>Accessibility</li>
                                        </a>
                                        <a href='#contact'>
                                            <li>Contact Us</li>
                                        </a>
                                        <a href='#pickup'>
                                            <li>Store Pickup</li>
                                        </a>
                                    </ul>
                                </div>
                                <div className='categories-container'>
                                    <div className='footer-categories'>Categories</div>
                                    <ul className='categories-options'>
                                        <a href='#action'>
                                            <li>Action</li>
                                        </a>
                                        <a href='#comedy'>
                                            <li>Comedy</li>
                                        </a>
                                        <a href='#drama'>
                                            <li>Drama</li>
                                        </a>
                                        <a href='#horror'>
                                            <li>Horror</li>
                                        </a>
                                        <a href='#kids'>
                                            <li>Kids</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-hl"></div>
                    <div className='copyright'>
                        <div className='text-copyright'>
                            Copyright &copy; 2023&nbsp;
                            <span className='text-logo'>
                                <a href='#pocketbookie'>PocketBookie</a>
                            </span>
                            . All rights reserved.
                        </div>
                        <div className='payment-options'>
                            <a href='https://pay.google.com/'>
                                <img src={require('../../assets/google-pay.png')} alt='google-pay'></img>
                            </a>
                            <a href='https://www.phonepe.com/'>
                                <img src={require('../../assets/phonepe.png')} alt='phonepe'></img>
                            </a>
                            <a href='https://paytm.com/'>
                                <img src={require('../../assets/paytm.png')} alt='paytm'></img>
                            </a>
                            <a href='https://www.mastercard.co.in/en-in.html'>
                                <img src={require('../../assets/mastercard.png')} alt='mastercard'></img>
                            </a>
                            <a href='https://www.paypal.com/'>
                                <img src={require('../../assets/paypal.png')} alt='paypal'></img>
                            </a>
                            <a href='https://www.visa.co.in/'>
                                <img src={require('../../assets/visa.png')} alt='visa'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
