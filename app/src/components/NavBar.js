import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const location = window.location.pathname;

    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpen = () => {
      setNavOpen(true);
    }

    const handleNavClose = () => {
        setNavOpen(false);
    }

    return (
        <>
            <div className="nav-bar" onMouseLeave={handleNavClose}>
                <div className={location === "/" ? "nav-bar-item user-location" : "nav-bar-item"}><Link to={"/"}>Home</Link></div>
                <div className={location === "/education/" || location === "/experience/" || location === "/projects/" ? "nav-bar-item about-btn user-location" : "nav-bar-item about-btn"} onMouseEnter={handleNavOpen}>About</div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><Link to={"/education/"}>Education</Link></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><Link to={"/experience/"}>Experience</Link></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><Link to={"/projects/"}>Projects</Link></div>
                <div className={navOpen === true ? "nav-bar-item contact-pushed" : "nav-bar-item contact-back"}><Link to={"/contact/"} className = {location === "/contact/" ? "user-location" : ''}>Contact</Link></div>
            </div>
            <div className={navOpen === true ? "nav-bar-underline-open" : "nav-bar-underline-closed"}></div>
            <div className='line-across'></div>
        </>
    )
}

export default NavBar;