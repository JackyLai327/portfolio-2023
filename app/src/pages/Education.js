import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EducationInstitute from "../components/EducationInstitute";
import { RMITLogo } from "../resources/images";
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
          :
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

      <div class="d-flex education">
          <div className={instituteSelected === "RMIT" ? "education-institute slide-in-from-left" : "d-none"}>
            <EducationInstitute className={instituteSelected === "RMIT" ? "education-institute" : "collapse"}
              instituteLogo={RMITLogo}
              instituteName="RMIT University"
              degree="Bachelor of Information Technology"
              duration="2021 - 2023"
              notableClasses={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              skillsAcquired={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              awards={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              gpa="4.0"
              extracurricular={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
            />
          </div>
          <div className={instituteSelected === "ICA" ? "education-institute slide-in-from-right" : "d-none"}>
            <EducationInstitute 
              instituteLogo={RMITLogo}
              instituteName="RMIT University"
              degree="Bachelor of Information Technology"
              duration="2021 - 2023"
              notableClasses={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              skillsAcquired={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              awards={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
              gpa="4.0"
              extracurricular={`
                <ul>
                  <li>Dcard is an online forum application that has 18 million active users every month</li>
                  <li>Main contributor to localise the Dcard app into the English version</li>
                  <li>Assured APIs sent from client side are exactly as written in specification</li>
                  <li>Tested for potential hidden user errors and bugs</li>
                  <li>Tools used: Lokalise, SurfShark</li>
                </ul>
              `}
            />
          </div>
          
      </div>
      <Footer />
    </>
  )
}

export default Education;