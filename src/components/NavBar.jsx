/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FaCode } from 'react-icons/fa';
import { FcAbout, FcHome, FcContacts } from 'react-icons/fc';
import BigHeads from './BigHeads';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color="faded"
        light
        style={ {
          height: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#006494',
          position: 'relative',
          zIndex: '1',
          top: '0',
          width: '100%',
        } }
      >
        <BigHeads />

        <NavbarToggler onClick={ toggleNavbar } className="me-2" />
        <Collapse
          isOpen={ !collapsed }
          navbar
          style={ {
            backgroundColor: '#006494',
            borderRadius: '5px',
            padding: '10px',
            marginTop: '1rem',
            position: 'relative',
            zIndex: '1',
          } }
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/"
                style={ {
                  color: 'orange',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '10px',
                } }
              >
                <FcHome />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/about"
                style={ {
                  color: 'orange',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '10px',
                } }
              >
                <FcAbout />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/projects"
                style={ {
                  color: 'orange',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '10px',
                } }
              >
                <FaCode
                  style={ {
                    color: '#42C920',
                  } }
                />
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#contact"
                style={ {
                  color: 'orange',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '10px',
                } }
              >
                <FcContacts />
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
