import React from 'react';
import '../../App.css';
import Swiper, { Navigation } from 'swiper';

class FeaturedSection extends React.Component {
    componentDidMount() {
        const swiper = new Swiper(".featured-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
            modules: [Navigation],
        });
    };
    render() {
        return (
            <section className="featured" id="featured">

                <h1 className="heading"> <span>featured books</span> </h1>

                <div className="swiper featured-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-1.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-2.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-3.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-4.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-5.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-6.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-7.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-8.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-9.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={require('../../assets/book-10.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>featured books</h3>
                                <div className="price">$15.99 <span>$20.99</span></div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>

                    </div>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>

                </div>

            </section>
        );
    };
};

export default FeaturedSection;