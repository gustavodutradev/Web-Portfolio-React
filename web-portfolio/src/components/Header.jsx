/* eslint-disable no-unused-vars */
// Main Imports
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
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
                    <Link to="/projects">Projects</Link>
                </section>
            </nav>
        </header>
    )
  }
}

export default Header;