import React from 'react';
import '../../App.css';

class NewsLetter extends React.Component {
    render() {
        return (
            <section className="newsletter">
                <form action="">
                    <h3>subscribe for latest updates</h3>
                    <input type="email" name="" placeholder="enter your email..." id="" className="box"></input>
                    <input type="submit" value="subscribe" className="btn"></input>
                </form>
            </section>
        );
    };
};

export default NewsLetter;