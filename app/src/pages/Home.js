import React from 'react';
import AnimatedShape from '../components/AnimatedShape';
import NavBar from '../components/NavBar';
import profilePic from '../resources/profile_pic_hi.JPG';

function Home() {

  return (
    <div>
      <div className='home-top-block'>
        <div className='summary'>
          <div className='code-font typewriter'>
            <span className='text-function-color'>print</span>
            <span className='text-parenthesis-color'>(</span>
            <span className='text-string-color'>'Hello, world!'</span>
            <span className='text-parenthesis-color'>)</span>
          </div>
          <div>My name is Yu-Cheng Lai</div>
          <div>I'm an IT student at RMIT</div>
        </div>
      </div>
      

      <NavBar />

      <div className='home-pfp'>
        <img src={profilePic} alt='pfp' /> 
      </div>

      <AnimatedShape shape='rotating-square' size='6vw' top='80vh' left='10vw'/>
      <AnimatedShape shape='rotating-square' size='10vw' top='75vh' left='22vw'/>
      <AnimatedShape shape='rotating-square' size='15vw' top='70vh' left='40vw'/>
      <AnimatedShape shape='bouncing-circle' size='.5rem' top='18.8rem' left='31.5rem'/>
    </div>
  );
}


export default Home;