import React from "react";
import '../../App.css';
import Swiper from "swiper";

class Blogs extends React.Component {
    componentDidMount() {
        const swiper = new Swiper(".blogs-slider", {
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
            <section className="blogs" id="blogs">

                <h1 className="heading"> <span>our blogs</span> </h1>

                <div className="swiper blogs-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={require("../../assets/blog-1.jpg")} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={require("../../assets/blog-2.jpg")} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={require("../../assets/blog-3.jpg")} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={require("../../assets/blog-4.jpg")} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                        <div className="swiper-slide box">
                            <div className="image">
                                <img src={require("../../assets/blog-5.jpg")} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>blog title goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                                <a href="#" className="btn">read more</a>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        );
    };
};

export default Blogs;