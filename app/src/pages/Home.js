import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {

  return (
    <div>
      <div className='home-top-block'></div>
      
      <NavBar />

      <div className='text-danger'>PHOTO AND SUMMARY</div>

      <Footer />
    </div>
  );
}


export default Home;