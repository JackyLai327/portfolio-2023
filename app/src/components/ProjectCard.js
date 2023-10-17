import React, { useState } from 'react'
import { portal, githubDarkblue } from '../resources/images';

function ProjectCard(props) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [slideAnimation, setSlideAnimation] = useState(false);
    const [imagePreview, setImagePreview] = useState(false);

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
        }, 300)
    }

    const focusImage = () => {
        setImagePreview(true);
    }

    const closePreview = () => {
        setImagePreview(false);
    }

    return (
        <>
            <div className={!isExpanded ? "project-card-collapsed" : "project-card-expanded"}>
                <div>
                    {/* TITLE -> BOTH */}
                    <div className="sliding-container">
                        <div className="project-title text-center">{props.title}</div>
                    </div>
                    {/* DATES -> EXPAND */}
                    <div className={!isExpanded ? "d-none" : "project-date"}>{props.date}</div>

                    {/* THUMBNAIL -> COLLAPSED */}
                    {/* <div className={!isExpanded ? "project-thumbnail" : "d-none"}><img src={props.thumbnail} alt="project-thumbnail"/></div> */}

                    {/* SLIDE -> COLLAPSED */}
                    <div className={!isExpanded || props.previews === undefined ? "project-slide" : "d-none"}>
                        <img src={props.previews?.[slideNumber]} alt={"preview slide number " + slideNumber} className={slideAnimation ? "slide-change" : ""} onClick={focusImage}/>
                    </div>
                    {/* SLIDE BUTTONS -> COLLAPSED */}
                    <div className={!isExpanded || props.previews === undefined ? "d-flex slide-buttons" : "d-none"}>
                        <div className='prev-slide-button' onClick={prevSlide}><button style={{"all": "unset"}}>&lt;</button></div>
                        <div className='focus-image-button' onClick={focusImage}><button style={{"all": "unset"}}>View Image</button></div>
                        <div className='next-slide-button' onClick={nextSlide}><button style={{"all": "unset"}}>&gt;</button></div>
                    </div>
                    <div className='project-links'>
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
                    {/* DESCRIPTION -> BOTH */}
                    <div className="project-description d-flex">{props.description}</div>
                    {/* SUMMARY -> EXPANDED */}
                    <div className={!isExpanded ? "d-none" : "project-summary"} dangerouslySetInnerHTML={{__html: props.summary}}></div>
                    {/* DATES -> COLLAPSED */}
                    <div className={!isExpanded ? "project-date" : "d-none"}>{props.date}</div>
                </div>
                <div>
                    {/* EXPAND BUTTON -> COLLAPSED */}
                    <div className={!isExpanded ? 'project-card-expand-button' : "d-none"} onClick={expandCard}><button style={{"all": "unset"}}>Show more</button></div>
                    {/* COLLAPSE BUTTON -> EXPANDED */}
                    <div className={!isExpanded ? "d-none" : "project-card-collapse-button"} onClick={collapseCard}><button style={{"all": "unset"}}>Show less</button></div>
                </div>
            </div>
            
            {/* FOCUS IMAGE */}
            {imagePreview ?
            <div>
                <div className='focus-background'></div>
                <div className="focus-container">
                    <div className='focus-prev-slide-button' onClick={prevSlide}><button style={{"all": "unset"}}>&lt;</button></div>
                    <div className="focused-image">
                        <img src={props.previews?.[slideNumber]} alt={"preview slide number " + slideNumber} className={slideAnimation ? "slide-change" : ""}/>
                    </div>
                    <div className='focus-next-slide-button' onClick={nextSlide}><button style={{"all": "unset"}}>&gt;</button></div>
                </div>
                <div className="focus-close-button" onClick={closePreview}><div className="focus-close-button-cross"></div></div>
            </div> : null
            }
        </>
    )
}

export default ProjectCard