import { Zoom } from 'react-reveal';

function ExperienceSection(props) {
    return (
        <Zoom>
            <div className="experience-section">
                <div className="experience-company"><a href={props.companyLink} target="_blank" rel="noreferrer">{props.company}</a></div>
                <div className="experience-location">{props.location}</div>
                <div className="experience-title">{props.title}</div>
                <div className="experience-summary" dangerouslySetInnerHTML={{__html: props.summary}}></div>
                <div className="experience-date">{props.date}</div>
                <div className="experience-logo"><img src={props.companyLogo} alt="company logo" /></div>
            </div>
            <div className="timeline-separator"></div>
        </Zoom>
    )
}

export default ExperienceSection;