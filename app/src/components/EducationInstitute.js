import React, { useState } from 'react';

function EducationInstitute(props) {

    var skillsAcquired = props.skillsAcquired;
    var awards = props.awards;
    var extracurricular = props.extracurricular;

    const [skillHovered, setSkillHovered] = useState(false);

    const handleSkillHover = (boolVal) => {
        setSkillHovered(boolVal);
    }

    return (
        <>
            <div className="education-logo">
                <img src={props.instituteLogo} alt="institute logo" />
                <span className="education-name">{props.instituteName}</span>
            </div>
            <div className="education-section">
                <div className="education-degree">
                    <span className="emoji">👨🏻‍🎓</span> {props.degree}
                    <span className="education-duration">[ {props.duration} ]</span>
                    <span className="education-gpa">GPA: {props.gpa}</span>
                </div>

                <hr />

                <div>Skills Acquired</div>
                <div className="education-skills">
                    {skillsAcquired.map((skill, index) => (
                        <div key={index} className="skill" onMouseEnter={()=>handleSkillHover(true)} onMouseLeave={()=>handleSkillHover(false)}>
                            <img src={skill} alt="skill icon" />
                            <div className={skillHovered ? "skill-mask" : "collapse"}>{skill.toString().split(".")[0].split("/").pop()}</div> 
                        </div>
                    ))}
                </div>

                <hr />

                <div>Awards</div>
                <div className="education-awards">
                    {awards.map((skill, index) => (
                        <div key={index}>{skill}</div>
                    ))}
                </div>

                <hr />

                <div>Extracurricular</div>
                <div className="education-clubs">
                    {extracurricular.map((skill, index) => (
                        <div key={index}>{skill}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EducationInstitute;