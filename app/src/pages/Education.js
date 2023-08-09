import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EducationInstitute from "../components/EducationInstitute";
import { RMITLogo, python, react, nodejs } from "../resources/images";
import { scholarship, peerMentor2022s1, peerMentor2022s2,
          peerMentor2023s1 } from "../resources/PDFs";
import React from "react";
import ColourSwitch from "../components/ColourSwitch";

function Education() {

  const [instituteSelected, setInstituteSelected] = React.useState("");

  const handleInstituteSelected = (institute) => {
    setInstituteSelected(institute);
  }

  return (
    <>
      <NavBar />

      <ColourSwitch />
      
      <div className="heading typewriter contact">
          <span>education_background</span>
          <span className="text-parenthesis-color">(</span>
          <span className="text-parenthesis-color">)</span>
      </div>

      <div className="institute-tab d-flex text-center">
          <div 
            className={instituteSelected === "RMIT" ? "institute-tab-item institute-underline" : "institute-tab-item"}
            onClick={() => handleInstituteSelected("RMIT")}
            >RMIT University
          </div>
          <div 
            className={instituteSelected === "ICA" ? "institute-tab-item institute-underline" : "institute-tab-item"}
            onClick={() => handleInstituteSelected("ICA")}
            >Ivy Collegiate Academy
          </div>
      </div>

      <div className={instituteSelected === "" ? "empty-space" : "d-none"}>Choose an institute to investigate...</div>

      {/* RMIT University */}
      <div className="d-flex education">
        <div className={instituteSelected === "RMIT" ? "education-institute slide-in-from-left" : "d-none"}>
          <EducationInstitute className={instituteSelected === "RMIT" ? "education-institute" : "collapse"}
            instituteLogo={RMITLogo}
            instituteName="RMIT University"
            degree="Bachelor of Information Technology"
            duration="2021 - 2023"
            skillsAcquired={[react, nodejs, python]}
            awards={[scholarship, peerMentor2022s1, peerMentor2022s2, peerMentor2023s1]}
            gpa="3.4"
            extracurricular={[]}
          />
        </div>

        {/* Ivy Collegiate Academy */}
        <div className={instituteSelected === "ICA" ? "education-institute slide-in-from-right" : "d-none"}>
          <EducationInstitute 
            instituteLogo={RMITLogo}
            instituteName="RMIT University"
            degree="Bachelor of Information Technology"
            duration="2021 - 2023"
            skillsAcquired={[]}
            awards={[]}
            gpa="4.0"
            extracurricular={[]}
          />
        </div>
          
      </div>
      <Footer />
    </>
  )
}

export default Education;