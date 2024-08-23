// Main imports
import React, { Component } from 'react';
// Logic imports
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Components Imports
import DefaultNav from './components/DefaultNav';
import Footer from './components/Footer';
import SandwichNav from './components/SandwichNav';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

// Style imports
import './App.css';
import './css/Loading.css';

class App extends Component {
  render() {
    const mobileWidth = 480;

    return (
      <BrowserRouter>
        <div>
          { window.screen.width < mobileWidth ? <SandwichNav /> : <DefaultNav /> }

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
