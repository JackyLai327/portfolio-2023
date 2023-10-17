import React, { useEffect } from 'react';
import { moon, sun } from '../resources/images';

function ColourSwitch() {

    const [darkMode, setDarkMode] = React.useState(false);

    useEffect(() => {
        // If no-colour is true, add no-colour class to body
        if (localStorage.getItem("dark-mode") === "true") {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        } else if (localStorage.getItem("dark-mode") === "false") {
            document.body.classList.remove("dark-mode");
            setDarkMode(false);
        }
    }, []);

    const handleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
        localStorage.setItem("dark-mode", !darkMode);
    }

    return(
        <>
            <div className="colour-switch-container">
                <div className='colour-switch-text'>Dark Mode</div>
                <div className="colour-switch-background" onClick={handleDarkMode}>
                    <div className={darkMode ? "colour-switch-toggle toggle-right" : "colour-switch-toggle toggle-left"}></div>
                    <div className={!darkMode ? "off-text" : "d-none"}><img src={sun} alt="sun" /></div>
                    <div className={!darkMode ? "d-none" : "on-text"}><img src={moon} alt="moon" /></div>
                </div>
            </div>
        </>
    )
}

export default ColourSwitch;