import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";
import { dcardIcon } from "../resources/images";

function Experience() {
    return (
        <>
            <NavBar />
            <div className="heading typewriter">
                <span>show_past_experience</span>
                <span className="text-parenthesis-color">(</span>
                <span className="text-parenthesis-color">)</span>
                :
            </div>

            <div className="timeline-top"></div>
            
            <ExperienceSection 
                title="Production QA Intern"
                company="Dcard"
                companyLink="https://www.dcard.tw/"
                companyLogo={dcardIcon}
                summary={`
                    <ul>
                        <li>Dcard is an online forum application that has 18 million active users every month</li>
                        <li>Main contributor to localise the Dcard app into the English version</li>
                        <li>Assured APIs sent from client side are exactly as written in specification</li>
                        <li>Tested for potential hidden user errors and bugs</li>
                        <li>Tools used: Lokalise, SurfShark</li>
                    </ul>
                `}
                date="Oct 2021 - Feb 2022"
                location="Taipei, Taiwan"
            />

            <ExperienceSection 
                title="Production QA Intern"
                company="Dcard"
                companyLink="https://www.dcard.tw/"
                companyLogo={dcardIcon}
                summary={`
                    <ul>
                        <li>Dcard is an online forum application that has 18 million active users every month</li>
                        <li>Main contributor to localise the Dcard app into the English version</li>
                        <li>Assured APIs sent from client side are exactly as written in specification</li>
                        <li>Tested for potential hidden user errors and bugs</li>
                        <li>Tools used: Lokalise, SurfShark</li>
                    </ul>
                `}
                date="Oct 2021 - Feb 2022"
                location="Taipei, Taiwan"
            />

            <ExperienceSection 
                title="Production QA Intern"
                company="Dcard"
                companyLink="https://www.dcard.tw/"
                companyLogo={dcardIcon}
                summary={`
                    <ul>
                        <li>Dcard is an online forum application that has 18 million active users every month</li>
                        <li>Main contributor to localise the Dcard app into the English version</li>
                        <li>Assured APIs sent from client side are exactly as written in specification</li>
                        <li>Tested for potential hidden user errors and bugs</li>
                        <li>Tools used: Lokalise, SurfShark</li>
                    </ul>
                `}
                date="Oct 2021 - Feb 2022"
                location="Taipei, Taiwan"
            />

            <div style={{height: "4.75rem"}}></div>

            <Footer />
        </>
    );
}

export default Experience;