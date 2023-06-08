import React, { useEffect } from 'react';

function ColourSwitch() {

    const [colour, setColour] = React.useState(true);

    useEffect(() => {
        // If no-colour is true, add no-colour class to body
        if (localStorage.getItem("colour") === "false") {
            document.body.classList.add("no-colour");
            setColour(false);
        } else if (localStorage.getItem("colour") === "true") {
            document.body.classList.remove("no-colour");
            setColour(true);
        }
    }, []);

    const handleColour = () => {
        document.body.classList.toggle("no-colour");
        setColour(!colour);
        localStorage.setItem("colour", !colour);
    }

    return(
        <>
            <div className="colour-switch-container">
                <div style={{"userSelect": "none"}}>Toggle Colours</div>
                <div className="colour-switch-background" onClick={handleColour}>
                    <div className={colour ? "colour-switch-toggle toggle-left" : "colour-switch-toggle toggle-right"}></div>
                </div>
            </div>
        </>
    )
}

export default ColourSwitch;