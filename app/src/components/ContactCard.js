import React, { useState } from 'react';

function ContactCard(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <a className="contact-card" href={props.link} target="_blank" rel="noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={isHovered ? props.iconHovered : props.icon} alt="social-icon"/>
            <div>
                <div>{props.title}</div>
                <div>{props.detail}</div>
            </div>
        </a>
    );
}

export default ContactCard;