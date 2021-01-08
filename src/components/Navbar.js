import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('About')
    return (
        <div className="navbar">
            <div className="navbar__active">
                    {active}
                </div>
                <div className="navbar__items">
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    </Link>
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    </Link>
                    <Link to="/Projects">
                        <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>
                    <Link to="/Contact">
                        <div className="navbar__item" onClick={() => setActive('Contact')}>Contact</div>
                    </Link>
                </div>
        </div>
    );
};

export default Navbar;