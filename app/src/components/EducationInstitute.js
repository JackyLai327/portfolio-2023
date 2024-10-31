import React, { useEffect, useState } from 'react';

function EducationInstitute(props) {

    var skillsAcquired = props.skillsAcquired;
    var awards = props.awards;
    var clubs = props.extracurricular;

    const [skillHovered, setSkillHovered] = useState(false);
    const [clubHovered, setClubHovered] = useState(false);

    const handleSkillHover = (boolVal) => {
        setSkillHovered(boolVal);
    }

    const handleClubHover = (boolVal) => {
        setClubHovered(boolVal);
    }

    useEffect(() => {
    }, [skillHovered, clubHovered]);

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
                <div className="education-skills" onMouseEnter={()=>handleSkillHover(true)} onMouseLeave={()=>handleSkillHover(false)}>
                    {skillsAcquired.map((skill, index) => (
                        <div key={index} className="skill" id={index} >
                            <img src={skill} alt="skill icon"  />
                            <div className={skillHovered ? "skill-mask" : "d-none"}>{skill.toString().split(".")[0].split("/").pop() }</div> 
                            { console.log(skill.toString()) }
                        </div>
                    ))}
                </div>

                <hr />

                <div>Awards / Certificates (tap to open file)</div>
                <div className="education-awards">
                    {awards.map((award, index) => (
                        <div key={index} className='award'>
                            <a href={award} target="_blank" rel="noreferrer">{award.toString().split(".")[0].split("/").pop()}</a>
                        </div>
                    ))}
                </div>

                <hr />

                <div>Extracurricular</div>
                <div className="education-clubs"  onMouseEnter={()=>handleClubHover(true)} onMouseLeave={()=>handleClubHover(false)}>
                    {clubs[0].substring(clubs[0].length - 3) === "mp4" ? null :
                        clubs.map((club, index) => (
                            <div key={index} className="club" >
                                <img src={club} alt="club" />
                                <div className={clubHovered ? "club-mask" : "collapse"}>{club.toString().split(".")[0].split("/").pop()}</div> 
                            </div>
                    ))}
                    {clubs[0].substring(clubs[0].length - 3) !== "mp4" ? null :
                        clubs.map((club, index) => (
                            <div key={index} className="club">
                                <video autoPlay loop muted>
                                    <source src={club} type="video/mp4" />
                                </video>
                                <div className={clubHovered ? "club-mask" : "collapse"}>{club.toString().split(".")[0].split("/").pop()}</div> 
                            </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EducationInstitute;
