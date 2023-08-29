import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { hacker } from '../resources/images';

function AppRouter() {
    return (
        <Router>
            <div className='page-cover'>Please view on a larger screen for the best experiences...<br /><img src={hacker} alt="hacker" /></div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/education/" element={<Education />} />
                <Route path="/experience/" element={<Experience />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/contact/" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;