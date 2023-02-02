import './App.css';
import Header from './components/Header/Header';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import IconsSection from './components/IconsSection/IconsSection';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import { Component } from 'react';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Arrivals from './components/Arrivals/Arrivals';
import Deals from './components/Deals/Deals';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

window.onload = () => {
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
  fadeOut();
};

function loaderActive() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.classList.add('active');
};

function fadeOut() {
  setTimeout(loaderActive, 4000);
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BottomNavbar />
        <LoginForm />
        <Home />
        <IconsSection />
        <FeaturedSection />
        <NewsLetter />
        <Arrivals />
        <Deals />
        <Reviews />
        <Blogs />
        <Footer />
        <Loader />
      </div>
    );
  };
};

export default App;