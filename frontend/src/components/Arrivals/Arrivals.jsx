import React from "react";
import '../../App.css';
import Swiper from 'swiper';

class Arrivals extends React.Component {
    componentDidMount() {
        const swiper = new Swiper(".arrivals-slider", {
            spaceBetween: 10,
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
            <section className="arrivals" id="arrivals">

                <h1 className="heading"> <span>new arrivals</span> </h1>

                <div className="swiper arrivals-slider">

                    <div className="swiper-wrapper">

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-1.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-2.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-3.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-4.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-5.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

                <div className="swiper arrivals-slider">

                    <div className="swiper-wrapper">

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-6.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-7.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-8.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-9.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                        <a href="#" className="swiper-slide box">
                            <div className="image">
                                <img src={require('../../assets/book-10.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

            </section>
        );
    };
};

export default Arrivals;