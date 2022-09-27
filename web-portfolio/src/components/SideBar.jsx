import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="container">
    <input type="checkbox" id="menuToggle" />
    <label htmmlFor="menuToggle" class="menu-icon">xxx</label>

    {/* <header>
        <div id="brand">slide in/out navigation</div>
    </header> */}

    <nav className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
    </nav>
    </div>
  );
};

export default SideBar;