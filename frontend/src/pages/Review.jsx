import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Review extends React.Component {
    render() {
        return (
            <div className="review-container">
                <Link to='/orders' id='back-to-homepage' className="fas fa-backward"></Link>
                <div className="review">
                    <h3>My reviews</h3>
                    <div className="book-review">
                        <div className="book-container">
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
                                <div className="delivery">
                                    <div className="delivery-date">
                                        <span><i className="fas fa-circle"></i>&nbsp;&nbsp;Delivered on Feb 5, 2023</span>
                                    </div>
                                    <div className="delivery-status">
                                        <span>your item has been delivered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rating-review">
                            <h3>Rating and Review</h3>
                            <div className="rating">
                                <span><i className="fas fa-star"></i>&nbsp;&nbsp;Rate this product</span>
                                <div className="select">
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </div>
                            <div className="review-write">
                                <span><i className="fas fa-star"></i>&nbsp;&nbsp;Review this product</span>
                                <div className="write">
                                    <span>Description</span>
                                    <textarea placeholder="add description..." className="box"></textarea>
                                    <span>Title</span>
                                    <textarea placeholder="add title..." className="box"></textarea>
                                    <button className="btn submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Review;