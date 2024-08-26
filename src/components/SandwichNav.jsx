/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { FaCode, FaDownload } from 'react-icons/fa';
import { FcAbout, FcContacts, FcHome } from 'react-icons/fc';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
} from 'reactstrap';
import curriculo from '../data/curriculo_atualizado_08_24.pdf';
import BigHeads from './BigHeads';

function SandwichNav() {
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
          // eslint-disable-next-line no-magic-numbers
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(2px)',
          padding: '10px',
          position: 'fixed',
          zIndex: '1',
          top: '0',
          width: '100%',
          maxWidth: '100vmax',
          opacity: '0.75',
        } }
      >
        <NavLink href="/">
          <BigHeads />
        </NavLink>

        <NavbarToggler
          onClick={ toggleNavbar }
          className="me-2"
          style={ {
            backgroundColor: '#f09819',
            border: '2.5px solid black',
          } }
        />
        <Collapse
          isOpen={ !collapsed }
          navbar
          style={ {
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderRadius: '5px',
            padding: '10px',
            marginTop: '1rem',
            position: 'relative',
            zIndex: '1',
            opacity: '0.9',
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
                Sobre
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
                Projetos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#footer"
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
                Contato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={ curriculo }
                style={ {
                  color: 'orange',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  gap: '10px',
                } }
                download="Gustavo-Barros-Dutra-Santos-CV"
                target="_blank"
              >
                <FaDownload />
                Currículo
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default SandwichNav;
