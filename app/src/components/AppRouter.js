import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { HashRouter as Router, Router, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Router>
                <Route exact path="/" element={<Home />} />
                <Route path="/education/" element={<Education />} />
                <Route path="/experience/" element={<Experience />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/contact/" element={<Contact />} />
            </Router>
        </Router>
    )
}

export default AppRouter;