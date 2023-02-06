import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Book1 from './pages/Book1';
import Cart from './pages/Cart';
import EditProfile from './pages/EditProfile';
import HomePage from './pages/HomePage';
import LikedBooks from './pages/LikedBooks';
import LoggedInPage from './pages/LoggedInPage';
import LoginPage from './pages/LoginPage';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import RegistrationPage from './pages/RegistrationPage';
import Review from './pages/Review';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className='App'>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/liked' element={<LikedBooks />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/orders' element={<Orders />}></Route>
              <Route path='/review' element={<Review />}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/register' element={<RegistrationPage />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/logged' element={<LoggedInPage />}></Route>
              <Route path='/editProfile' element={<EditProfile />}></Route>
              <Route path='/ikigai' element={<Book1 />}></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  };
};

export default App;