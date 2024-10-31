import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";
import { dcardIcon, museSceneLab, pssLogo } from "../resources/images";
import ColourSwitch from "../components/ColourSwitch";

function Experience() {
    return (
        <>
            <NavBar />

            <ColourSwitch />

            <div className="heading typewriter">
                <span>show_past_experience</span>
                <span className="text-parenthesis-color">(</span>
                <span className="text-parenthesis-color">)</span>
            </div>

            <div className="timeline-top"></div>
            <ExperienceSection
                title="DevOps Engineer"
                company="PSS Group"
                companyLink="https://www.pss-group.com/en/"
                companyLogo={pssLogo}
                summary={`
                    <ul>
                        <li>UI/UX Design- Designed the UI of a building access security system from scratch using Figma</li>
                        <li>Web Development- Implemented the frontend web app with Vue 3 based on the Figma design</li>
                        <li>Time Management- Learned Vue 3 while designing and implementing the web app</li>
                        <li>The product is being promoted as a lucrative service to fin-tech enterprises for the company</li>
                    </ul>
                `}
                date="Sep 2024 - Present"
                location="Taipei, Taiwan"
            />

            <br></br>

            <ExperienceSection 
                title="Web Dev Placement"
                company="Muse Scene Lab"
                companyLink="https://musescenelab.com/"
                companyLogo={museSceneLab}
                summary={`
                    <ul>
                        <li>Muse Scene Lab is dedicated to creating VR/XR/AR and online platform for music learners and rehearsals</li>
                        <li>Developing a web application for music learners to learn and practice music online</li>
                        <li>Led the frontend team to implement all designs required by the client</li>
                        <li>Visualised music performance data into XY charts for student's performance analysis</li>
                    </ul>
                `}
                date="Jul 2023 - Nov 2023"
                location="Madrid, Spain"
            />

            <ExperienceSection 
                title="Production QA Intern"
                company="Dcard"
                companyLink="https://www.dcard.tw/"
                companyLogo={dcardIcon}
                summary={`
                    <ul>
                        <li>Dcard is an online forum application that has 18 million active users every month</li>
                        <li>Localised the Dcard app into the English version</li>
                        <li>Assured APIs sent from client side are exactly as written in specification</li>
                        <li>Tested for potential hidden errors and bugs</li>
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