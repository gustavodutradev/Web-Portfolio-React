import React from 'react';
import { NavLink } from 'reactstrap';
import styled from 'styled-components';
import tw from 'twin.macro';
import BigHeads from './BigHeads';

function NavBarSimple() {
  const SNav = styled.nav`
    ${tw`
    flex
    justify-around
    items-center
    relative
    z-10
    top-0
    `}
    background: -webkit-linear-gradient(90deg, #1488cc 0%, #00a2ff 100%);
    backdrop-filter: blur(2px);
    padding: 10px;
    max-width: 100vmax;
`;

  return (
    <SNav>
      <NavLink href="/">
        <BigHeads />
      </NavLink>

      <NavLink
        href="/about"
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: '2px 1px 2px #121212ad',
        } }
      >
        Sobre
      </NavLink>

      <NavLink
        href="/projects"
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: '2px 1px 2px #121212ad',
        } }
      >
        Projetos
      </NavLink>
    </SNav>
  );
}

export default NavBarSimple;
