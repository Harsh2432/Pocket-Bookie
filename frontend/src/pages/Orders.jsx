import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Orders extends React.Component {
    render() {
        return (
            <div className="order-container">
                <Link to='/logged' id='back-to-homepage' className="fas fa-backward"></Link>
                <div className="order">
                    <h3>My Orders</h3>
                    <div className="filters-books">
                        <div className="filter-container">
                            <h3>filters</h3>
                            <div className="order-status">
                                <span className="status">Order Status</span>
                                <div className="options-status">
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;on the way</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;delivered</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;cancelled</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;returned</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-time">
                                <span className="time">Order time</span>
                                <div className="options-time">
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;last 30 days</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;2022</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;2021</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;2020</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;2019</span>
                                    </div>
                                    <div>
                                        <input type="checkbox"></input><span>&nbsp;&nbsp;older</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <div className="review">
                                        <Link to='/review'><span><i className="fas fa-star"></i>&nbsp;&nbsp;Rate and Review product</span></Link>
                                    </div>
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
                                <div className="delivery">
                                    <div className="delivery-date">
                                        <span><i className="fas fa-circle"></i>&nbsp;&nbsp;Delivered on Jan 31, 2023</span>
                                    </div>
                                    <div className="delivery-status">
                                        <span>your item has been delivered</span>
                                    </div>
                                    <div className="review">
                                        <Link to='/review'><span><i className="fas fa-star"></i>&nbsp;&nbsp;Rate and Review product</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    };
};

export default Orders;