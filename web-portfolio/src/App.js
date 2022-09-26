// Main imports
import React, { Component } from 'react'
// Logic imports
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// Components Imports
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Contact from './components/Contact';
// Style imports
import './css/Header.css';
import './css/Projects.css';
import './css/Skills.css';
import './css/Loading.css';
import './css/Home.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="page-body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
