import React from 'react';
import '../../App.css';
import Swiper from 'swiper';

class Home extends React.Component {
    componentDidMount() {
        const swiper = new Swiper(".books-slider", {
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
            <section className="home" id="home">

                <div className="row">

                    <div className="content">
                        <h3>upto 75% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
                        <a href="#" className="btn">shop now</a>
                    </div>

                    <div className="swiper books-slider">
                        <div className="swiper-wrapper">
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-1.png')} alt=""></img></a>
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-2.png')} alt=""></img></a>
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-3.png')} alt=""></img></a>
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-4.png')} alt=""></img></a>
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-5.png')} alt=""></img></a>
                            <a href="#" className="swiper-slide"><img src={require('../../assets/book-6.png')} alt=""></img></a>
                        </div>
                        <img src={require('../../assets/stand.png')} className="stand" alt=""></img>
                    </div>

                </div>

            </section>
        );
    };
};

export default Home;