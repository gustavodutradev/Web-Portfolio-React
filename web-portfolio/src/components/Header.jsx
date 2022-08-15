/* eslint-disable no-unused-vars */
// Main Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="header">
            <nav className="nav-links">
                <section>
                    <Link to="/">Home</Link>
                </section>
                <section>
                    <Link to="/about">About</Link>
                </section>
                <section>
                    <Link to="/projects">Projects</Link>
                </section>
            </nav>
        </header>
    )
  }
}

export default Header;