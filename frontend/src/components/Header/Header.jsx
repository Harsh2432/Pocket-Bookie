import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

window.onscroll = () => {
    const searchForm = document.querySelector('.search-form');
    searchForm.classList.remove('active');
    const header = document.querySelector('.header');
    const headerTwo = document.querySelector('.header-2');
    if (window.scrollY > 80) {
        header.classList.add('active');
        headerTwo.classList.add('active');
    }
    else {
        header.classList.remove('active');
        headerTwo.classList.remove('active');
    };
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.searchActive = this.searchActive.bind(this);
    };
    searchActive() {
        const searchForm = document.querySelector('.search-form');
        const searchBtn = document.querySelector('#search-btn');
        searchBtn.addEventListener('click', () => {
            searchForm.classList.toggle('active');
        });
    };
    render() {
        return (
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
                        <Link to='/login' className="fas fa-user logo"></Link>
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
        );
    };
}

export default Header;
