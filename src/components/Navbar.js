import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__active">
                    About
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">About</div>
                    <div className="navbar__item">Resume</div>
                    <div className="navbar__item">Projects</div>
                    <div className="navbar__item">Contact</div>
                </div>
            </div>
        );
    }
}

export default Navbar;