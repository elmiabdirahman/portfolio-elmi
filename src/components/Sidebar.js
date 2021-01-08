import React, { Component } from 'react';
import image1 from "../assets/images/image23.jpg";
import facebook from "../assets/icons/Facebook.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";

import resume from "../assets/resume.pdf";

class Sidebar extends Component {
    render() {
        const handleEmailMe = () => {
            window.open("mailto:elmielmi522@gmail.com")
        }
        return (
            <div className="sidebar">
                <img src={image1} alt="avatar" className="sidebar__avatar"/>
                <div className="sidebar__name"><span>Elmi</span> Elmi</div>
                <div className="sidebar__item sidebar__item">Full Stack Engineering</div>
                <a href={resume} download="resume.pdf">
                    <div className="sidebar__item sidebar__resume">
                        <img src={tie} alt="resume" className="sidebar__icon"/>
                        Download Resume
                    </div>
                </a>
                <figure className="sidebar__social-icons my-2">
                    <a href="https://www.facebook.com/elmiabdirahman.elmi"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"></img></a>
                    <a href="https://www.linkedin.com/in/elmi-elmi-07182b186/"><img src={linkedin} alt="instagram" className="sidebar__icon"></img></a>
                </figure>
                    <div className="sidebar__contact">
                    <div className="sidebar__item sidebar__github">
                        <a href="https://github.com/elmiabdirahman"><img src={github} alt="github" className="sidebar__icon mr-3"/>github</a>
                    </div>
                    <div className="sidebar__location">
                        <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                        Saint Paul Minnesota
                        </div>
                        <div className="sidebar__item">elmielmi522@gmail.com </div>
                        <div className="sidebar__item">12323123/123123213</div>
                    </div>
                <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
            </div>
        );
    }
}

export default Sidebar;