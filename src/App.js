// Main imports
import React, { Component } from 'react';
// Logic imports
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Components Imports
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

// Style imports
import './App.css';
import './css/Loading.css';
import './css/Skills.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div className="page-body">
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home" /> } />
            <Route path="/Web-Portfolio-React" element={ <Navigate to="/" /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
