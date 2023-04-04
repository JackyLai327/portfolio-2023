

function EducationInstitute(props) {
    return (
        <>
            <div className="education-logo"><img src={props.instituteLogo} alt="institute logo" /></div>
            <div className="education-section">
                <div className="education-name">{props.instituteName}</div>
                <div className="education-degree">{props.degree}</div>
                <div className="education-duration">{props.duration}</div>
                <div className="education-classes">
                    <div dangerouslySetInnerHTML={{__html: props.notableClasses}}></div>
                </div>
                <div className="education-skills">
                    <div dangerouslySetInnerHTML={{__html: props.skillsAcquired}}></div>
                </div>
                <div className="education-awards">
                    <div dangerouslySetInnerHTML={{__html: props.awards}}></div>
                </div>
                <div className="education-gpa">{props.gpa}</div>
                <div className="education-clubs">
                    <div dangerouslySetInnerHTML={{__html: props.extracurricular}}></div>
                </div>
            </div>
        </>
    );
}

export default EducationInstitute;