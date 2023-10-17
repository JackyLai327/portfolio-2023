import { useState } from "react";

function NavBar() {
    const location = window.location.href.split("/#")[1];

    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpen = () => {
      setNavOpen(true);
    }

    const handleNavClose = () => {
        setNavOpen(false);
    }
    console.log(location)

    return (
        <>
            <div className="nav-bar" onMouseLeave={handleNavClose}>
                <div className={location === "/" ? "nav-bar-item user-location" : "nav-bar-item"}><a href="/portfolio-2023/#/">Home</a></div>
                <div className={location === "/education/" || location === "/experience/" || location === "/projects/" ? "nav-bar-item about-btn user-location" : "nav-bar-item about-btn"} onMouseEnter={handleNavOpen}>About</div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/#/education/">Education</a></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/#/experience/">Experience</a></div>
                <div className={navOpen === true ? "nav-bar-item nav-bar-open" : "nav-bar-closed"}><a href="/portfolio-2023/#/projects/">Projects</a></div>
                <div className={navOpen === true ? "nav-bar-item contact-pushed" : "nav-bar-item contact-back"}><a className = {location === "/contact/" ? "user-location" : ''} href="/portfolio-2023/#/contact/">Contact</a></div>
            </div>

            <div className={location === "/" || location === undefined ? "show-breadcrumb" : "collapse"}>Yu-Cheng's Portfolio &gt; Home</div>
            <div className={location === "/education/" ? "show-breadcrumb" : "collapse"}>Yu-Cheng's Portfolio &gt; About &gt; Education</div>
            <div className={location === "/experience/" ? "show-breadcrumb" : "collapse"}>Yu-Cheng's Portfolio &gt; About &gt; Experience</div>
            <div className={location === "/projects/" ? "show-breadcrumb" : "collapse"}>Yu-Cheng's Portfolio &gt; About &gt; Projects</div>
            <div className={location === "/contact/" ? "show-breadcrumb" : "collapse"}>Yu-Cheng's Portfolio &gt; Contact</div>
            <div className={navOpen === true ? "nav-bar-underline-open" : "nav-bar-underline-closed"}></div>
            
            <div className='line-across'></div>
        </>
    )
}

export default NavBar;