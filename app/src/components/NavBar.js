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
                <div className={location === "/" ? "nav-bar-item user-location" : "nav-bar-item"}><a href="/portfolio-2023/">Home</a></div>
                <div className={location === "/portfolio-2023/education/" || location === "/portfolio-2023/experience/" || location === "/portfolio-2023/projects/" ? "nav-bar-item about-btn user-location" : "nav-bar-item about-btn"} onMouseEnter={handleNavOpen}>About</div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/education/">Education</a></div>
                <Link to="/portfolio-2023/experience/"><div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}>Experience</div></Link>
                {/* <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/experience/">Experience</a></div> */}
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/projects/">Projects</a></div>
                <div className={navOpen === true ? "nav-bar-item contact-pushed" : "nav-bar-item contact-back"}><a className = {location === "/portfolio-2023/contact/" ? "user-location" : ''} href="/portfolio-2023/contact/">Contact</a></div>
            </div>
            <div className={navOpen === true ? "nav-bar-underline-open" : "nav-bar-underline-closed"}></div>
            <div className='line-across'></div>
        </>
    )
}

export default NavBar;