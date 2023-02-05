import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

class LikedBooks extends React.Component {
    render() {
        return (
            <div className="liked-container">
                <Link to='/' id='back-to-homepage' className="fas fa-backward"></Link>
                <div className="liked-books">
                    <h3>liked books</h3>
                    <div className="box">
                        <div className="book">
                            <div className="image">
                                <img src={require('../assets/book-1.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">₹15.99 <span>₹20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div className="options">
                            <a href="#" className="icon">
                                <div className="fas fa-trash"></div>
                                <span>Delete from Liked Books</span>
                            </a>
                            <a href="#" className="icon">
                                <div className="fas fa-eye"></div>
                                <span>Go to Product</span>
                            </a>
                            <a href="#" className="icon">
                                <div className="fas fa-shopping-cart"></div>
                                <span>Add to Cart</span>
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="book">
                            <div className="image">
                                <img src={require('../assets/book-2.png')} alt=""></img>
                            </div>
                            <div className="content">
                                <h3>new arrivals</h3>
                                <div className="price">₹15.99 <span>₹20.99</span></div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div className="options">
                            <a href="#" className="icon">
                                <div className="fas fa-trash"></div>
                                <span>Delete from Liked Books</span>
                            </a>
                            <a href="#" className="icon">
                                <div className="fas fa-eye"></div>
                                <span>Go to Product</span>
                            </a>
                            <a href="#" className="icon">
                                <div className="fas fa-shopping-cart"></div>
                                <span>Add to Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default LikedBooks;