import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

function AppRouter() {
    return (
        <HashRouter basename='/portfolio-2023/'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education/" element={<Education />} />
                <Route path="/experience/" element={<Experience />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/contact/" element={<Contact />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter;