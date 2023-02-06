import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import Home from '../components/Home/Home';
import IconsSection from '../components/IconsSection/IconsSection';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Arrivals from '../components/Arrivals/Arrivals';
import Deals from '../components/Deals/Deals';
import Reviews from '../components/Reviews/Reviews';
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer/Footer';

class LoggedInPage extends React.Component {
    constructor(props) {
        super(props);
        this.searchActive = this.searchActive.bind(this);
        this.optionsActive = this.optionsActive.bind(this);
        this.optionsDisable = this.optionsDisable.bind(this);
    };
    searchActive() {
        const searchForm = document.querySelector('.search-form');
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.addEventListener('click', () => {
            searchForm.classList.toggle('active');
        });
    };
    optionsActive() {
        const userBtn = document.querySelector('.user-btn');
        const links = document.querySelector('.links');
        userBtn.addEventListener('mouseover', () => {
            links.classList.add('active');
        });
    };
    optionsDisable() {
        const links = document.querySelector('.links');
        const navbar = document.querySelector('.navbar');
        navbar.addEventListener('mouseover', () => {
            links.classList.remove('active');
        });
    };
    render() {
        return (
            <div className="LoggedInPage">
                <header className="header">

                    <div className="header-1">

                        <Link to='/' className='logo'><i className="fas fa-book"></i> bookly</Link>

                        <form action="" className="search-form">
                            <input type="search" name="" placeholder="search books..." id="search-box"></input>
                            <label htmlFor="search-box" className="fas fa-search"></label>
                        </form>

                        <div className="icons">
                            <div id="search-btn" className="fas fa-search" onClick={this.searchActive}></div>
                            <Link to='/cart' className="fas fa-shopping-cart"></Link>
                            <div className="fas fa-user logo user-btn" onMouseOver={this.optionsActive}>
                                <span>&nbsp;Harsh&nbsp;</span>
                            </div>

                            <div className="links">
                                <div className="link">
                                    <Link to='/profile'><i className="fas fa-id-card"><span>&nbsp;&nbsp;My Profile</span></i></Link>
                                </div>
                                <div className="link">
                                    <Link to="/liked"><i className="fas fa-heart"><span>&nbsp;&nbsp;My Liked Books</span></i></Link>
                                </div>
                                <div className="link">
                                    <Link to="/orders"><i className="fas fa-box"><span>&nbsp;&nbsp;My Orders</span></i></Link>
                                </div>
                                <div className="link">
                                    <Link to="/"><i className="fas fa-power-off"><span>&nbsp;&nbsp;Logout</span></i></Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="header-2">
                        <nav className="navbar" onMouseOver={this.optionsDisable}>
                            <a href="#home">home</a>
                            <a href="#featured">featured</a>
                            <a href="#arrivals">arrivals</a>
                            <a href="#reviews">reviews</a>
                            <a href="#blogs">blogs</a>
                        </nav>
                    </div>

                </header>

                <BottomNavbar />
                <Home />
                <IconsSection />
                <FeaturedSection />
                <NewsLetter />
                <Arrivals />
                <Deals />
                <Reviews />
                <Blogs />
                <Footer />
            </div>
        );
    };
};

export default LoggedInPage;