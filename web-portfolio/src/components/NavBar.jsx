/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
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
          border: '1px solid red',
          height: '7rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#00000033',
        } }
      >
        <NavbarBrand
          href="/"
          className="me-auto"
          style={ {
            display: 'flex',
            flexDirection: 'row',
            width: '95%',
            height: '100px',
            justifyContent: 'center',
            border: '1px solid red',
          } }
        >
          <BigHeads />
        </NavbarBrand>
        <NavbarToggler onClick={ toggleNavbar } className="me-2" />
        <Collapse isOpen={ !collapsed } navbar style={ { backgroundColor: '#00000033' } }>
          <Nav navbar>
            <NavItem>
              <NavLink
                href="/"
                style={ {
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                } }
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/projects"
                style={ {
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                } }
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/skills"
                style={ {
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                } }
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/about"
                style={ {
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                } }
              >
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
