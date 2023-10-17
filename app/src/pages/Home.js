import React from 'react';
import AnimatedShape from '../components/AnimatedShape';
import NavBar from '../components/NavBar';
import { profilePicFormal } from '../resources/images';
import Footer from '../components/Footer';
import ColourSwitch from '../components/ColourSwitch';

function Home() {

  const [foundEasterEgg, setFoundEasterEgg] = React.useState(false);

  const handleEasterEgg = () => {
    setFoundEasterEgg(true);
  }

  return (
    <>
      <div className='home-top-block'>
        <div className='summary'>
          <div className='code-font typewriter'>
            <span className='text-function-color'>print</span>
            <span className='text-parenthesis-color'>(</span>
            <span className='text-string-color home-easter-egg' onClick={handleEasterEgg}><button style={{"all": "unset"}}>'Hello, World!'</button></span>
            <span className='text-parenthesis-color'>)</span>
          </div>
          <span className={foundEasterEgg ? "egg-found" : "d-none"}>🥚 World says hi! 🥚</span>
          <div className='home-greeting'>Yu-Cheng Lai</div>
          <div className='home-greeting'>IT Graduate from RMIT</div>
        </div>
      </div>
      

      <NavBar />

      <ColourSwitch />

      <div className='json-summary'>
        [&#123; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"name": "Yu-Cheng Lai", <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"age": 23, <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"location": "Melbourne, Australia", <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"education": "RMIT University", <br />
        &nbsp;&nbsp;&nbsp;&nbsp;"personality": "ENFJ-A" <br />
        &#125;]
      </div>

      <div className="polaroid-container polaroid-1">
          <div className="pfp"><img src={profilePicFormal} alt="profile-image" /></div>
      </div>

      <AnimatedShape shape='bouncing-circle' size='.5rem' top='15.8rem' left='30.5rem'/>
      
      <div className='infinite-dotted-line'></div>
      
      <div className='home-empty-space'></div>
      <Footer />
    </>
  );
}


export default Home;
