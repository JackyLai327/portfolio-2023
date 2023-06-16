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
          <span className={foundEasterEgg ? "egg-found" : "d-none"}>🥚 World says hi! 🤍</span>
          <div>My name is Yu-Cheng Lai</div>
          <div>I'm an IT student at RMIT</div>
        </div>
      </div>
      

      <NavBar />

      <ColourSwitch />

      <div className='polaroid-stack'>
        <div className="polaroid-container polaroid-1">
            <div className="polaroid-image"><img src={profilePicFormal} alt="polaroid-image" /></div>
        </div>
        <div className="polaroid-container polaroid-2">
            <div className="polaroid-image"><img src={profilePicFormal} alt="polaroid-image" /></div>
        </div>
        <div className="polaroid-container polaroid-3">
            <div className="polaroid-image"><img src={profilePicFormal} alt="polaroid-image" /></div>
        </div>
        <div className="polaroid-container polaroid-4">
            <div className="polaroid-image"><img src={profilePicFormal} alt="polaroid-image" /></div>
        </div>
        <div className="polaroid-container polaroid-5">
            <div className="polaroid-image"><img src={profilePicFormal} alt="polaroid-image" /></div>
        </div>
      </div>

      <AnimatedShape shape='bouncing-circle' size='.5rem' top='15.8rem' left='31.5rem'/>
      
      <div className='infinite-dotted-line'></div>
      
      <div className='home-empty-space'></div>
      <Footer />
    </>
  );
}


export default Home;