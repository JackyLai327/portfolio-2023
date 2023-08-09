import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router basename='portfolio-2023'>
            <Routes>
                <Route path="/portfolio-2023/" element={<Home />} />
                <Route path="/portfolio-2023/education" element={<Education />} />
                <Route path="/portfolio-2023/experience" element={<Experience />} />
                <Route path="/portfolio-2023/projects" element={<Projects />} />
                <Route path="/portfolio-2023/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;