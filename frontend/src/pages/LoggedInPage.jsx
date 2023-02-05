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
    };
    searchActive() {
        const searchForm = document.querySelector('.search-form');
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.addEventListener('click', () => {
            searchForm.classList.toggle('active');
        });
    };
    optionsActive() {

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
                            <div className="fas fa-user logo">
                                <span>&nbsp;Harsh&nbsp;</span>
                            </div>
                            <div className="options active">

                                <form className="links">
                                    <Link to="/profile">
                                        <span className="profile"><i className="fas fa-id-card"></i>&nbsp;&nbsp;My Profile</span>
                                    </Link>
                                    <Link to="/liked">
                                        <span className="liked"><i className="fas fa-heart"></i>&nbsp;&nbsp;My Liked Books</span>
                                    </Link>
                                    <Link to="/orders">
                                        <span className="liked"><i className="fas fa-box"></i>&nbsp;&nbsp;My Orders</span>
                                    </Link>
                                    <Link to="/">
                                        <span className="liked"><i className="fas fa-power-off"></i>&nbsp;&nbsp;Logout</span>
                                    </Link>
                                </form>

                            </div>
                        </div>

                    </div>

                    <div className="header-2">
                        <nav className="navbar">
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