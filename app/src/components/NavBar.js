import { useState } from "react";

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
        <div>
            <div className="nav-bar" onMouseLeave={handleNavClose}>
                <div className={location === "/" ? "nav-bar-item user-location" : "nav-bar-item"}><a href="/">Home</a></div>
                <div className={location === "/education" || location === "/experience" || location === "/projects" ? "nav-bar-item about-btn user-location" : "nav-bar-item about-btn"} onMouseEnter={handleNavOpen}>About</div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/education">Education</a></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/experience">Experience</a></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/projects">Projects</a></div>
                <div className={navOpen === true ? "nav-bar-item contact-pushed" : "nav-bar-item contact-back"}><a className = {location === "/contact" ? "user-location" : ''} href="/contact">Contact</a></div>
                <div className={navOpen === true ? "nav-bar-underline-open" : "nav-bar-underline-closed"}></div>
            </div>
            <div className='line-across'></div>
        </div>
    )
}

export default NavBar;