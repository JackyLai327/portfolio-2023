

function EducationInstitute(props) {
    return (
        <>
            <div className="education-logo">
                <img src={props.instituteLogo} alt="institute logo" />
                <span className="education-name">{props.instituteName}</span>
            </div>
            <div className="education-section">
                <div className="education-degree"><span className="emoji">👨🏻‍🎓</span> {props.degree}
                    <span className="education-duration">[ {props.duration} ]</span>
                    <span className="education-gpa">GPA: {props.gpa}</span>
                </div>
                <hr />
                <div className="education-classes">
                    <div>Notable Classes</div>
                    <div dangerouslySetInnerHTML={{__html: props.notableClasses}}></div>
                </div>
                <hr />
                <div className="education-skills">
                    <div>Skills Acquired</div>
                    <div dangerouslySetInnerHTML={{__html: props.skillsAcquired}}></div>
                </div>
                <hr />
                <div className="education-awards">
                    <div>Awards</div>
                    <div dangerouslySetInnerHTML={{__html: props.awards}}></div>
                </div>
                <hr />
                <div className="education-clubs">
                    <div>Extracurricular</div>
                    <div dangerouslySetInnerHTML={{__html: props.extracurricular}}></div>
                </div>
            </div>
        </>
    );
}

export default EducationInstitute;