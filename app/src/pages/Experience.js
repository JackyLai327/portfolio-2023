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
                        <li>Designed and Implemented the wb app of a lucrative visitor access system marketed to fintech enterprises using Figma and Vue3.</li>
                        <li>Built and Deployed a car park dashboard for easy monitoring and reduced unsatisfactory user experiences using Vue3, Express and GCP</li>
                        <li>Time Management- Learned Vue 3 while designing and implementing the web app.</li>
                        <li>Proactively communicated with managers and CTO for building tools to increase workload efficiency.</li>
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
                        <li>Implemented the web app using React libraries according to Figma designs</li>
                        <li>Visualised and processed music-performance data using React-Vis</li>
                        <li>Led the frontend team using the Kanban management methodology</li>
                        <li>Actively communicated with CTO and CEO for constant feedback and improvements to align with business requirements. •Received positive feedback for accurate implementation and detailed documentation</li>
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
                        <li>Localised the app into English using i18n and lokalise.</li>
                        <li>ested newly-implemented features by capturing API requests and responses, and provide bug-reports when bugs are present.</li>
                        <li>Researched potential markets in Southeast Asia and Latin America regions for company expansion.</li>
                        <li>Received positive feedback for being efficient and proactive from the HR department.</li>
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