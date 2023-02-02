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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
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