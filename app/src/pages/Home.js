import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import profilePic from '../resources/profile_pic.jpeg';

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
    </div>
  );
}


export default Home;