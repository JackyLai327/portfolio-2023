import React, { useState } from 'react'
import portal from '../resources/portal.png';
import githubDarkblue from '../resources/github_darkblue.png';

function ProjectCard(props) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [slideAnimation, setSlideAnimation] = useState(false);

    const expandCard = () => {
        setIsExpanded(true);
    }

    const collapseCard = () => {
        setIsExpanded(false);
    }

    const nextSlide = () => {
        slideChange();
        if (slideNumber < props.previews.length - 1) {
            setSlideNumber(slideNumber + 1);
        } else {
            setSlideNumber(0);
        }
    }

    const prevSlide = () => {
        slideChange();
        if (slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
        } else {
            setSlideNumber(props.previews.length - 1);
        }
    }

    const slideChange = () => {
        setSlideAnimation(true);
        setTimeout(() => {
            setSlideAnimation(false);
        }, 500)
    }

    return (
        <div>
            <div className={!isExpanded ? "project-card-collapsed" : "project-card-expanded"}>
                {/* TITLE -> BOTH */}
                <div className="project-title text-center">{props.title}</div>
                {/* DATES -> EXPAND */}
                <div className={!isExpanded ? "d-none" : "project-date"}>{props.date}</div>
                {/* THUMBNAIL -> COLLAPSED */}
                <div className={!isExpanded ? "project-thumbnail" : "d-none"}><img src={props.thumbnail} alt="project-thumbnail"/></div>
                {/* SLIDE -> EXPANDED */}
                <div className={!isExpanded || props.previews === undefined ? "d-none" : "project-slide"}>
                    <img src={props.previews?.[slideNumber]} alt={"preview slide number " + slideNumber} className={slideAnimation ? "slide-change" : ""}/>
                    <div className='d-flex slide-buttons'>
                        <div className='prev-slide-button' onClick={prevSlide}><button style={{"all": "unset"}}>Previous</button></div>
                        <div className='next-slide-button' onClick={nextSlide}><button style={{"all": "unset"}}>Next</button></div>
                    </div>
                </div>
                {/* DESCRIPTION -> BOTH */}
                <div className="project-description d-flex">
                    <div>{props.description}</div>
                    {/* WEBSITE LINK -> EXPANDED */}
                    <div className={!isExpanded || props.websiteLink === undefined ? "d-none" : "project-link"}>
                        <a href={props.websiteLink} target="_blank" rel="noreferrer">
                            <img src={portal} alt="portal" />
                        </a>
                    </div>
                    {/* GITHUB LINK -> EXPANDED */}
                    <div className={!isExpanded || props.githubLink ===undefined ? "d-none" : "project-link"}>
                        <a href={props.githubLink} target="_blank" rel="noreferrer">
                            <img src={githubDarkblue} alt="github-logo" />
                        </a>
                    </div>
                </div>
                {/* SUMMARY -> EXPANDED */}
                <div className={!isExpanded ? "d-none" : "project-summary"} dangerouslySetInnerHTML={{__html: props.summary}}></div>
                {/* DATES -> COLLAPSED */}
                <div className={!isExpanded ? "project-date" : "d-none"}>{props.date}</div>
                {/* EXPAND BUTTON -> COLLAPSED */}
                <div className={!isExpanded ? 'project-card-expand-button' : "d-none"} onClick={expandCard}><button style={{"all": "unset"}}>Expand</button></div>
                {/* COLLAPSE BUTTON -> EXPANDED */}
                <div className={!isExpanded ? "d-none" : "project-card-collapse-button"} onClick={collapseCard}><button style={{"all": "unset"}}>Collapse</button></div>
            </div>
        </div>
    )
}

export default ProjectCard