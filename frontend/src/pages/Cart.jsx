import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    render() {
        return (
            <div className="cart-container">
                <Link to='/logged' id='back-to-homepage' className="fas fa-backward"></Link>
                <div className="cart">
                    <h3>My Cart</h3>
                    <div className="books-price">
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
                                <div className="options">
                                    <div className="counter">
                                        <button className="btn">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <div className="box">1</div>
                                        <button className="btn">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <Link to='/' className="btn">
                                        <i className="fas fa-eye"><span>&nbsp;&nbsp;go to product</span></i>
                                    </Link>
                                    <Link to='/' className="btn">
                                        <i className="fas fa-trash"><span>&nbsp;&nbsp;remove from cart</span></i>
                                    </Link>
                                </div>
                            </div>
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
                                    <div className="counter">
                                        <button className="btn">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <div className="box">1</div>
                                        <button className="btn">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                    <Link to='/' className="btn">
                                        <i className="fas fa-eye"><span>&nbsp;&nbsp;go to product</span></i>
                                    </Link>
                                    <Link to='/' className="btn">
                                        <i className="fas fa-trash"><span>&nbsp;&nbsp;remove from cart</span></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="price-container">
                            <h3>price details</h3>
                            <div className="price">
                                <span>price (1 item)</span>
                                <span>₹1000</span>
                            </div>
                            <div className="discount">
                                <span>discount</span>
                                <span className="discounted-price">₹200</span>
                            </div>
                            <div className="delivery-charges">
                                <span>delivery charges</span>
                                <span className="delivery">FREE</span>
                            </div>
                            <div className="total-price">
                                <span>total amount</span>
                                <span>₹800</span>
                            </div>
                            <div className="savings">
                                <span>You will save ₹200 on this order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Cart;