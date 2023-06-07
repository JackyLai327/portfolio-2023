import React, { useEffect } from 'react';

function ColourSwitch() {

    const [colour, setColour] = React.useState(true);

    useEffect(() => {
        // If no-colour is true, add no-colour class to body
        if (localStorage.getItem("no-colour") === "false") {
            document.body.classList.add("no-colour");
            setColour(false);
        }
    }, []);

    const handleColour = () => {
        document.body.classList.toggle("no-colour");
        setColour(!colour);
        localStorage.setItem("no-colour", !colour);
    }

    return(
        <>
            <div className="colour-switch-container">
                <div style={{"user-select": "none"}}>Toggle Colours</div>
                <div className="colour-switch-background" onClick={handleColour}>
                    <div className={colour ? "colour-switch-toggle toggle-left" : "colour-switch-toggle toggle-right"}></div>
                </div>
            </div>
        </>
    )
}

export default ColourSwitch;