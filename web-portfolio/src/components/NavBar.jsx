import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar() {
  return (
    <div>
        <Nav
        style={{
          borderBottom: `1px solid #00000033`,
          backgroundColor: `#00000033`,
        }}
        >
      <NavItem>
        <NavLink
          href="/"
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRight: `1px solid #00000033`,
            letterSpacing: '0.1rem',
         }}
        >
          HOME
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/projects"
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRight: `1px solid #00000033`,
            letterSpacing: '0.1rem',
         }}
         >
         PROJECTS
        </NavLink>
      </NavItem>

    <NavItem>
      <NavLink
      href="/skills"
      style={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        borderRight: `1px solid #00000033`,
        letterSpacing: '0.1rem',
     }}
      >
      SKILLS
      </NavLink>
    </NavItem>

    <NavItem>
      <NavLink
        href="/about"
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          borderRight: `1px solid #00000033`,
          letterSpacing: '0.1rem',
       }}
      >
       ABOUT
      </NavLink>
    </NavItem>
  </Nav>
    </div>
  )
}

export default NavBar;