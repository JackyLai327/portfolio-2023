import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import webGameDevThumbnail from "../resources/web_game_dev_thumbnail.png";
import questionMark from "../resources/question_mark.png";

function Projects() {

  const [parameterSelected, setParameterSelected] = useState(null);

  const selectParameter = (parameter) => {
    setParameterSelected(parameter);
  }


  return (
    <div>
      <NavBar />
      <div className="code-font heading typewriter">
        <span>project</span>
        <span className="text-parenthesis-color">(</span>
        <span className={parameterSelected === "self" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("self")}>self</span>
        <span>, </span>
        <span className={parameterSelected === "team" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("team")}>team</span>
        <span className="text-parenthesis-color">)</span>
        <span>:</span>
      </div>

      <div className="project-collection">

        {/* Default/Welcome card */}
        <div className={parameterSelected !== null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Click a parameter to view projects" 
            thumbnail={questionMark} 
            description="It's just up there!" 
            date="Yes, in the heading!"
            summary="Ah... You missed the heading? Well, click on self or team, where there are dotted underlines, to view my projects. Here are more hints: self --> individual projects, team --> group projects." 
            // No links for this card
            // No preview slides for this card
          />
        </div>

        {/* Group Projects */}
        <div className={parameterSelected === "self" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Web Game Development" 
            thumbnail={webGameDevThumbnail} 
            description="Group Project at RMIT" 
            date="2021"
            summary="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            websiteLink="https://jackylai327.github.io/iit_a3_repo/index.html"
            githubLink="https://jackylai327.github.io/iit_a3_repo/game01/build/web/index.html"
            // previews={}
          />
        </div>

        {/* Individual Projects */}
        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Twitter Inspired React/Node App" 
            // thumbnail={} 
            description="Full Stack Dev Web App" 
            date="Apr 2022 - Jun 2022"
            summary={`
              <ul>
                <li>Tools: React, Node, Express, Axios, Sequelize, MySQL2, Fastify</li>
                <li>Individually developed the entire application for RMIT’s Fullstack Programming course</li>
                <li>Was one of the most outstanding projects in class</li>
                <li>Implemented database for user to post and comment on each other’s posts</li>
              </ul>
            `}
            githubLink="https://github.com/JackyLai327/Twitter-Inspired-React-Node-App"
            // previews={}
          />
        </div>

        {/* Empty Card (individual) */}
        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="" 
            // thumbnail={} 
            description="" 
            date=""
            summary={`
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            `}
            githubLink=""
            websiteLink=""
            // previews={}
          />
        </div>

        {/* Empty Card (group) */}
        <div className={parameterSelected === "self" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="" 
            // thumbnail={} 
            description="" 
            date=""
            summary={`
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            `}
            githubLink=""
            websiteLink=""
            // previews={}
          />
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Projects;