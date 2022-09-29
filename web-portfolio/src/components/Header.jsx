// Main Imports
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
            <nav className="nav-links">
                <section className="link-container">
                    <Link to="/">Home</Link>
                </section>
                <section className="link-container">
                    <Link to="/about">About</Link>
                </section>
                <section className="link-container">
                    <Link to="/skills">Skills</Link>
                </section>
                <section className="link-container">
                    <Link to="/projects">GitHub Projects</Link>
                </section>
            </nav>
        </header>
  );
};

export default Header;