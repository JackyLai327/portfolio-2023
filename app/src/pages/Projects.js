import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { 
  webGameDevThumbnail, questionMark 
} from "../resources/images";

function Projects() {

  const [parameterSelected, setParameterSelected] = useState(null);

  const selectParameter = (parameter) => {
    setParameterSelected(parameter);
  }


  return (
    <>
      <NavBar />
      <div className="code-font heading typewriter">
        <span>show_project</span>
        <span className="text-parenthesis-color">(</span>
        <span className={parameterSelected === "self" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("self")}><button style={{"all": "unset"}}>self</button></span>
        <span>, </span>
        <span className={parameterSelected === "team" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("team")}><button style={{"all": "unset"}}>team</button></span>
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
            // No preview slides for this card\
          />
        </div>

        {/* Group Projects */}
        <div className={parameterSelected === "self" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Web Game Development" 
            thumbnail={webGameDevThumbnail} 
            description="Group Project at RMIT" 
            date="2021"
            summary={`
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            `}
            websiteLink="https://jackylai327.github.io/iit_a3_repo/tools_tech_test.html"
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
    </>
  );
}

export default Projects;