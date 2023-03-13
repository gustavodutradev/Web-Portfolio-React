// Main imports
import React, { Component } from 'react';
// Logic imports
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// Components Imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import NavBar from './components/NavBar';

// Style imports
import './css/Projects.css';
import './css/Skills.css';
import './css/Loading.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div className="page-body">
          <Routes>
            <Route path="/Web-Portfolio-React" element={ <Navigate to="/home" /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/skills" element={ <Skills /> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
