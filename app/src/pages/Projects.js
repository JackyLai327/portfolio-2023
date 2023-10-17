import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { 
  webGameDevThumbnail, questionMark, joyaki1, joyaki2, afterhours1, 
  afterhours2,
  lan1,
  lan2,
  lan3,
  cicd,
  cicd1,
  cicd2,
  canva,
  unichatLogo,
  unichat1,
  unichat2,
  unichat3
} from "../resources/images";
import ColourSwitch from "../components/ColourSwitch";

function Projects() {

  const [parameterSelected, setParameterSelected] = useState(null);

  const selectParameter = (parameter) => {
    setParameterSelected(parameter);
  }


  return (
    <>
      <NavBar />

      <ColourSwitch />

      <div className="code-font heading typewriter">
        <span>show_project</span>
        <span className="text-parenthesis-color">(</span>
        <span className={parameterSelected === "self" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("self")}><button style={{"all": "unset"}}>self</button></span>
        <span>, </span>
        <span className={parameterSelected === "team" ? "heading-parameter-selected" : "heading-parameter"} onClick={() => selectParameter("team")}><button style={{"all": "unset"}}>team</button></span>
        <span className="text-parenthesis-color">)</span>
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
            title="After Hours" 
            thumbnail={webGameDevThumbnail} 
            description="Game-Boy-Style Game Prototype" 
            date="2021"
            summary={`
              <ul>
                <li>Led the team to brainstorm and build the project with an outstanding outcome/feedback amonst the course</li>
                <li>Designed and implemented a playable gameboy-style game on website for both mobile and PC devices</li>
                <li>Implemented gaming AI bots that attack the player with different attack logic</li>
              </ul>
            `}
            websiteLink="https://jackylai327.github.io/iit_a3_repo/tools_tech_test.html"
            githubLink="https://jackylai327.github.io/iit_a3_repo/game01/build/web/index.html"
            previews={[webGameDevThumbnail, afterhours1, afterhours2]}
          />
        </div>

        <div className={parameterSelected === "self" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Joyaki" 
            thumbnail={joyaki1} 
            description="Flappy Bird Inspired Python Game" 
            date="Aug 2021 - Sep 2021"
            summary={`
              <ul>
                <li>Led to team to complete the project from scratch</li>
                <li>Lead developer and meeting organiser</li>
                <li>Created a boss fight for after a certain goal is achieved</li>
              </ul>
            `}
            githubLink="https://github.com/JackyLai327/joyaki-wesite"
            websiteLink="https://jackylai327.github.io/joyaki-wesite/about_us.html"
            previews={[joyaki1, joyaki2]}
          />
        </div>

        {/* Individual Projects */}
        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="UniChat" 
            thumbnail={unichatLogo} 
            description="Online Forum iOS App for Australian Uni Students" 
            date="Aug 2023 - Oct 2023"
            summary={`
              <ul>
                <li>Designed and implemented a forum app for Australian uni students to communicate with each other</li>
                <li>Implemented with Swift, SwiftUI and CoreData</li>
                <li>Allowed users to post discussions about unis and lecturers and like, reply and share other users' discussions</li>
                <li>User can rate their unis/lecturers on a scale of 0 to 5</li>
              </ul>
            `}
            previews={[unichatLogo, unichat1, unichat2, unichat3]}
            githubLink="https://github.com/JackyLai327/UniChat"
          />
        </div>

        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Loop Agile Now" 
            thumbnail={lan1} 
            description="Twitter Inspired Node/React Web App" 
            date="Apr 2022 - Jun 2022"
            summary={`
              <ul>
                <li>Tools: React, Node, Express, Axios, Sequelize, MySQL2, Fastify</li>
                <li>Included most twitter functionalities along with text/post styling when posting texts and images</li>
                <li>Implemented with several libraries including React, Node, Bootstrap, Express, Axios and Sequelize</li>
                <li>Received outstanding outcomes and graded as one of the top projects amongst the course</li>
              </ul>
            `}
            githubLink="https://github.com/JackyLai327/Twitter-Inspired-React-Node-App"
            previews={[lan1, lan2, lan3]}
          />
        </div>

        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="CI/CD Deployment Project" 
            thumbnail={cicd} 
            description="Automated Deployment Project with GitHub Actions" 
            date="Mar 2023"
            summary={`
              <ul>
                <li>Linted, tested, and generated a deployable artefact for a small web application</li>
                <li>Wrote a YAML CI pipeline to incorporate GitHub Actions with Node.js, PlayWright, Jest, Docker and MongoDB</li>
                <li>Integrated automation with linting, unit testing, component testing, E2E testing, and deployment with CI/CD</li>
              </ul>
            `}
            githubLink="https://github.com/JackyLai327/CI-CD-deployment-project-for-devops-course"
            previews={[cicd1, cicd2]}
          />
        </div>

        <div className={parameterSelected === "team" || parameterSelected === null ? "hide-project" : "display-project"}>
          <ProjectCard 
            title="Canva Inspired Software" 
            thumbnail={canva} 
            description="Canva Inspired Java GUI Application" 
            date="Apr 2022 - Jun 2022"
            summary={`
              <ul>
                <li>Built with Java UI library JavaFX and Scene Builder</li>
                <li>Nominated as one of the projects with the highest completeness of program amongst the course</li>
                <li>Implemented with MVC structure, the S.O.L.I.D. principles of programming and a database system for user to
                save the canva that allows shapes, texts and colours using drag and drop</li>
              </ul>
            `}
            githubLink="https://github.com/JackyLai327/canva-app"
            previews={[canva]}
          />
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Projects;