import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import { 
    githubDarkblue, githubYellow, emailDarkblue, emailYellow,
    linkedinDarkblue, linkedinYellow, instagramDarkblue, instagramYellow,
    facebookDarkblue, facebookYellow, resumeDarkblue, resumeYellow
} from "../resources/images";
import resume from "../resources/resume.pdf";

function Contact() {

    return (
        <>
            <NavBar />

            <div className="heading typewriter contact">
                <span>show_contact_details</span>
                <span className="text-parenthesis-color">(</span>
                <span className="text-parenthesis-color">)</span>
                :
            </div>
            
            
            {/* Social Medias */}
            <div className="socials">
                
                {/* Email */}
                <ContactCard 
                    icon={emailYellow}
                    iconHovered={emailDarkblue}
                    title="Email"
                    detail="jackylai327@gmail.com"
                    link="mailto:jackylai327@gmail.com"
                />

                {/* GitHub */}
                <ContactCard 
                    icon={githubYellow}
                    iconHovered={githubDarkblue}
                    title="GitHub"
                    detail="JackyLai327"
                    link="https://github.com/JackyLai327"
                />

                {/* LinkedIn */}
                <ContactCard 
                    icon={linkedinYellow}
                    iconHovered={linkedinDarkblue}
                    title="LinkedIn"
                    detail="Yu-Cheng Lai"
                    link="https://www.linkedin.com/in/yu-cheng-jacky-lai/"
                />

                {/* Instagram */}
                <ContactCard 
                    icon={instagramYellow}
                    iconHovered={instagramDarkblue}
                    title="Instagram"
                    detail="@jacky_lai.327"
                    link="https://www.instagram.com/jacky_lai.327/"
                />

                {/* Facebook */}
                <ContactCard 
                    icon={facebookYellow}
                    iconHovered={facebookDarkblue}
                    title="Facebook"
                    detail="Jacky Lai"
                    link="https://www.facebook.com/jacky.0327.lai"
                />

                {/* Resume */}
                <ContactCard 
                    icon={resumeYellow}
                    iconHovered={resumeDarkblue}
                    title="Resume"
                    detail="Download"
                    link={resume}
                />
            </div>

            <Footer />
        </>
    )   
}

export default Contact;