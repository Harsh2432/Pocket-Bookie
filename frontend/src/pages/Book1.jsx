import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

class Book1 extends React.Component {
    render() {
        return (
            <div className="product-container">
                <Link to='/logged' id='back-to-homepage' className="fas fa-backward"></Link>
                <div className="product">
                    <div className="book-container">
                        <div className="box">
                            <div className="book">
                                <div className="image">
                                    <img src={require('../assets/book-1.png')} alt=""></img>
                                </div>
                                <button className="btn">
                                    <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="details-container">
                        <h3>Ikigai - to a Long and Happy  (English, Hardcover, Garcia Hector)</h3>
                        <div className="btn"><i className="fas fa-star"></i>&nbsp;&nbsp;4.5</div>
                        <span className="ratings">100 Ratings & 50 Reviews</span>
                        <div className="price">₹15.99</div>
                        <span className="price-cut">₹20.99</span>
                        <div className="product-details">
                            <div className="author-details">
                                <span>author</span>
                                <span className="author-name">Garcia Hector</span>
                            </div>
                            <div className="highlights-details">
                                <span>highlights</span>
                                <div className="highlights">
                                    <li>Language: English</li>
                                    <li>Binding: Hardcover</li>
                                    <li>Publisher: Cornerstone</li>
                                    <li>Genre: Self-Help</li>
                                    <li>ISBN: 9781786330895</li>
                                    <li>Edition: 2017, 2017</li>
                                    <li>Pages: 208</li>
                                </div>
                            </div>
                            <div className="description-details">
                                <span>description</span>
                                <span className="description">THE INTERNATIONAL BESTSELLER We all have an ikigai. It's the Japanese word for 'a reason to live' or 'a reason to jump out of bed in the morning'. It's the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful. ______________________________ 'I read it and it's bewitched me ever since. I'm spellbound.' Chris Evans 'A refreshingly simple recipe for happiness.' Stylist 'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.' Neil Pasricha, bestselling author of The Happiness Equation.</span>
                            </div>
                        </div>
                        <div className="specifications">
                            <span className="heading">specifications</span>
                            <div className="book-details">
                                <span className="book-head">Book Details</span>
                                <div className="book-details-options">
                                    <div>
                                        <span>Imprint</span>
                                        <span className="span1">Hutchinson</span>
                                    </div>
                                    <div>
                                        <span>Publication Year</span>
                                        <span className="span2">2017 September</span>
                                    </div>
                                    <div>
                                        <span>Book Type</span>
                                        <span className="span3">Self Help</span>
                                    </div>
                                    <div>
                                        <span>Number of Pages</span>
                                        <span className="span4">195</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contributor">
                                <span className="contributor-head">Contributors</span>
                                <div className="contributor-details">
                                    <div>
                                        <span>Auther Info</span>
                                        <span className="span1">Héctor García (Author) Héctor García is a citizen of Japan, where he has lived for over a decade, and of Spain, where he was born. He is the author of several books about Japanese culture, including two worldwide bestsellers, A Geek in Japan and Ikigai. A former software engineer, he worked at CERN in Switzerland before moving to Japan. Francesc Miralles (Author) Francesc Miralles is the award-winning and internationally bestselling author of books about how to live well, together with the novels Love in Small Letters and Wabi-Sabi.</span>
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

export default Book1;