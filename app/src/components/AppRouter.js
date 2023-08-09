import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router basename='/portfolio-2023/'>
            <Routes>
                <Route basename='/portfolio-2023/' path="/" element={<Home />} />
                <Route basename='/portfolio-2023/' path="/education" element={<Education />} />
                <Route basename='/portfolio-2023/' path="/experience" element={<Experience />} />
                <Route basename='/portfolio-2023/' path="/projects" element={<Projects />} />
                <Route basename='/portfolio-2023/' path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;