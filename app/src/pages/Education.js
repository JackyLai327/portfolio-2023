import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EducationInstitute from "../components/EducationInstitute";
import { RMITLogo } from "../resources/images";

function Education() {
  return (
    <>
      <NavBar />
      
      <div className="heading typewriter contact">
          <span>education_background</span>
          <span className="text-parenthesis-color">(</span>
          <span className="text-parenthesis-color">)</span>
          :
      </div>

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

      <Footer />
    </>
  )
}

export default Education;