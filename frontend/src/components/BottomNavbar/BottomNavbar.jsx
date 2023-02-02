import React from 'react';
import '../../App.css';

class BottomNavbar extends React.Component {
    render() {
        return (
            <nav className="bottom-navbar">
                <a href="#home" className="fas fa-home"></a>
                <a href="#featured" className="fas fa-list"></a>
                <a href="#arrivals" className="fas fa-tags"></a>
                <a href="#reviews" className="fas fa-comments"></a>
                <a href="#blogs" className="fas fa-blog"></a>
            </nav>
        );
    };
};

export default BottomNavbar;
