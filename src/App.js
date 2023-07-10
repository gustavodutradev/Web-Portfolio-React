// Main imports
import React, { Component } from 'react';
// Logic imports
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Components Imports
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavBarSimple from './components/NavBarSimple';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

// Style imports
import './App.css';
import './css/Loading.css';

class App extends Component {
  render() {
    const mobileWidth = 480;
    console.log(window.screen.width);

    return (
      <BrowserRouter>
        <div>
          { window.screen.width < mobileWidth ? <NavBar /> : <NavBarSimple /> }

        </div>
        <div className="page-body">
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home" /> } />
            <Route path="/Web-Portfolio-React" element={ <Navigate to="/" /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Projects /> } />
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
