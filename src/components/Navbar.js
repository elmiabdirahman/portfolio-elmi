import React, { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('About')
    return (
        <div className="navbar">
            <div className="navbar__active">
                    {active}
                </div>
                <div className="navbar__items">
                    <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    <div className="navbar__item" onClick={() => setActive('Project')}>Projects</div>
                    <div className="navbar__item" onClick={() => setActive('Contact')}>Contact</div>
                </div>
        </div>
    );
};

export default Navbar;