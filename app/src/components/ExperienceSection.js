

function ExperienceSection(props) {
    return (
        <>
            <div className="experience-section">
                <div className="experience-company"><a href={props.companyLink} target="_blank" rel="noreferrer">{props.company}</a></div>
                <div className="experience-location">📍{props.location}</div>
                <div className="experience-title">{props.title}</div>
                <div className="experience-summary" dangerouslySetInnerHTML={{__html: props.summary}}></div>
                <div className="experience-date">{props.date}</div>
                <div className="experience-logo"><a href={props.companyLink} target="_blank" rel="noreferrer"><img src={props.companyLogo} alt="company logo" /></a></div>
            </div>
            <div className="timeline-separator"></div>
        </>
    )
}

export default ExperienceSection;
