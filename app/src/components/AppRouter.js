import React from 'react';
import Home from '../pages/Home';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/education/" element={<Education />} />
                <Route path="/experience/" element={<Experience />} />
                <Route path="/projects/" element={<Projects />} />
                <Route path="/contact/" element={<Contact />} />
            </Switch>
        </Router>
    )
}

export default AppRouter;