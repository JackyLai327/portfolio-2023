import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import webGameDevThumbnail from "../resources/web-game-dev-thumbnail.png";

function Projects() {

  const [parameterSelected, setParameterSelected] = useState(null);
  console.log(parameterSelected)

  const selectParameter = (parameter) => {
    setParameterSelected(parameter);
    console.log(parameterSelected)
  }

  return (
    <div>
      <NavBar />
      <div className="code-font heading typewriter">
        <span>display</span>
        <span className="text-parenthesis-color">(</span>
        <span className={parameterSelected === "self" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("self")}>self</span>
        <span>, </span>
        <span className={parameterSelected === "team" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("team")}>team</span>
        <span className="text-parenthesis-color">)</span>
        <span>:</span>
      </div>

      <div className="project-collection">
        <div className={parameterSelected === "self" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard //GROUP PROJECT
          title="Web Game Development" 
          thumbnail={webGameDevThumbnail} 
          description="Group Project at RMIT" 
          date="2021"
          summary="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          link1="https://jackylai327.github.io/iit_a3_repo/index.html"
          link2="https://jackylai327.github.io/iit_a3_repo/game01/build/web/index.html"
        /></div>
        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
          title="Web Game Development" 
          thumbnail={webGameDevThumbnail} 
          description="Group Project at RMIT" 
          date="2021"
          summary=""
          // link1="https://jackylai327.github.io/iit_a3_repo/index.html"
          link2="https://jackylai327.github.io/iit_a3_repo/game01/build/web/index.html"
        /></div>
        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
          title="Web Game Development" 
          thumbnail={webGameDevThumbnail} 
          description="Group Project at RMIT" 
          date="2021"
          summary=""
          // link1="https://jackylai327.github.io/iit_a3_repo/index.html"
          // link2="https://jackylai327.github.io/iit_a3_repo/game01/build/web/index.html"
        /></div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;