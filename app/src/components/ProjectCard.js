import React, { useState } from 'react'

function ProjectCard(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const expandCard = () => {
        setIsExpanded(true);
    }

    const collapseCard = () => {
        setIsExpanded(false);
    }

    return (
        <div>
            <div className={!isExpanded ? "project-card-collapsed" : "project-card-expanded"}>
                {/* BOTH */}
                <div className="project-title text-center">{props.title}</div>
                {/* EXPAND */}
                <div className={!isExpanded ? "d-none" : "project-date"}>{props.date}</div>
                {/* COLLAPSED */}
                <div className={!isExpanded ? "project-thumbnail" : "d-none"}><img src={props.thumbnail} alt="web-game-dev-thumbnail"/></div>
                {/* EXPANDED */}
                <div className={!isExpanded || props.previews === undefined ? "d-none" : "project-slide"}>IMAGE SLIDE GOES HERE</div>
                {/* BOTH */}
                <div className="project-description d-flex">
                    {props.description}
                    {/* EXPANDED */}
                    <div className={!isExpanded || props.link1 === undefined ? "d-none" : "project-link"}><a href={props.link1}>Direct Portal</a></div>
                    {/* EXPANDED */}
                    <div className={!isExpanded || props.link2 ===undefined ? "d-none" : "project-link"}><a href={props.link2}>Github Repo</a></div>
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