import React, { useState } from 'react'

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
            {console.log(props.previews?.[1])}
            <div className={!isExpanded ? "project-card-collapsed" : "project-card-expanded"}>
                {/* BOTH */}
                <div className="project-title text-center">{props.title}</div>
                {/* EXPAND */}
                <div className={!isExpanded ? "d-none" : "project-date"}>{props.date}</div>
                {/* COLLAPSED */}
                <div className={!isExpanded ? "project-thumbnail" : "d-none"}><img src={props.thumbnail} alt="web-game-dev-thumbnail"/></div>
                {/* EXPANDED */}
                <div className={!isExpanded || props.previews === undefined ? "d-none" : "project-slide"}>
                    <img src={props.previews?.[slideNumber]} alt={"preview slide number " + slideNumber} className={slideAnimation ? "slide-change" : ""}/>
                    <div className='d-flex slide-buttons'>
                        <div className='prev-slide-button' onClick={prevSlide}>Previous</div>
                        <div className='next-slide-button' onClick={nextSlide}>Next</div>
                    </div>
                </div>
                {/* BOTH */}
                <div className="project-description d-flex">
                    {props.description}
                    {/* EXPANDED */}
                    <div className={!isExpanded || props.link1 === undefined ? "d-none" : "project-link"}><a href={props.link1} target="_blank" rel="noreferrer">Direct Portal</a></div>
                    {/* EXPANDED */}
                    <div className={!isExpanded || props.link2 ===undefined ? "d-none" : "project-link"}><a href={props.link2} target="_blank" rel="noreferrer">Github Repo</a></div>
                </div>
                {/* EXPANDED */}
                <div className={!isExpanded ? "d-none" : "project-summary"}>{props.summary}</div>
                {/* COLLAPSED */}
                <div className={!isExpanded ? "project-date" : "d-none"}>{props.date}</div>
                {/* COLLAPSED */}
                <div className={!isExpanded ? 'project-card-expand-button' : "d-none"} onClick={expandCard}>Expand</div>
                {/* EXPANDED */}
                <div className={!isExpanded ? "d-none" : "project-card-collapse-button"} onClick={collapseCard}>Collapse</div>
            </div>
        </div>
    )
}

export default ProjectCard