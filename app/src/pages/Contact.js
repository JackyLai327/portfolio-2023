import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import { 
    githubDarkblue, githubYellow 
} from "../resources/images";

function Contact() {

    return (
        <>
            <NavBar />

            <div className="text-danger">
                Contact
            </div>
            
            {/* Social Medias */}
            <div className="socials">
                <ContactCard 
                    icon={githubYellow}
                    iconHovered={githubDarkblue}
                    title="GitHub"
                    detail="JackyLai327"
                    link="https://github.com/JackyLai327"
                />

                {/* Empty Contact Card */}
                <ContactCard 
                    // icon={githubYellow}
                    // iconHovered={githubDarkblue}
                    title=""
                    detail=""
                    link=""
                />
            </div>

            <Footer />
        </>
    )   
}

export default Contact;