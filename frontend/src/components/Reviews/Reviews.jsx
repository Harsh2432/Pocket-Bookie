import React from "react";
import '../../App.css';
import Swiper from 'swiper';

class Reviews extends React.Component {
    componentDidMount() {
        const swiper = new Swiper(".reviews-slider", {
            spaceBetween: 10,
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    };
    render() {
        return (
            <section className="reviews" id="reviews">

                <h1 className="heading"> <span>client's reviews</span> </h1>

                <div className="swiper reviews-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-1.png')} alt=""></img>
                            <h3>Vipul Manjrekar</h3>
                            <p>This is the best book store, and there is always a sale of some kind going on. You can find just what you are looking for here.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-2.png')} alt=""></img>
                            <h3>Aakansha Peje</h3>
                            <p>I would also like to say thank you to all your staff. Wow what great service, I love it! Thanks for the great service.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-3.png')} alt=""></img>
                            <h3>Anurag Kshirsagar</h3>
                            <p>Excellent service. The books were wrapped securely. I sent an email after to books arrived to ask about the author.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-4.png')} alt=""></img>
                            <h3>Shreya Shiralkar</h3>
                            <p>I am so happy to find this site. The packaging was phenomenal and my book arrived on time in perfect condition.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-5.png')} alt=""></img>
                            <h3>Shreyash Wakchaure</h3>
                            <p>A best place to buy books for book lovers. I was searching for a book for many years and I was happy that I could find it here.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <img src={require('../../assets/pic-6.png')} alt=""></img>
                            <h3>Yashasvi Kothari</h3>
                            <p>I found the title I was looking for. The ordering process was easy and I was happy to support an independent bookseller.</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        );
    };
};

export default Reviews;