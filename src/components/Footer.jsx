/* eslint-disable max-len */
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const SFooter = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    background: #121212;
    height: auto;
    width: 100vw;
    color: #fff;
`;

const SList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const SListItem = styled.li`
  margin: 5px;
  padding: 10px;
`;

const SDevelopedWith = styled.p`
width: 100%;
margin: 0;
position: relative;
bottom: 0;
display: flex;
text-align: center;
justify-content: space-around;
font-weight: bold;
font-size: 9px;
color: #121212;
background-color: orange;
padding: 0.2rem 0.5rem;
`;

function Footer() {
  return (
    <SFooter>
      <SList>
        <SListItem>
          <a href="https://www.linkedin.com/in/gustavodutradev/" target="_blank" rel="noreferrer">
            <FaLinkedin
              style={ {
                color: '#0072b1',
                width: '35px',
                height: '35px',
              } }
            />
          </a>
        </SListItem>
        <SListItem>
          <a href="https://github.com/Gustavo-trybedev" target="_blank" rel="noreferrer">
            <FaGithub
              style={ {
                color: '#fff',
                width: '35px',
                height: '35px',
              } }
            />

          </a>
        </SListItem>
        <SListItem>
          <a href="mailto:gustavo.dutra11@gmail.com">
            <FaEnvelope
              style={ {
                color: '#fff',
                width: '35px',
                height: '35px',
              } }
            />
          </a>
        </SListItem>
      </SList>
      <SDevelopedWith>
        Desenvolvido por Gustavo Dutra, utilizando React, Tailwind, Styled Components, Bootstrap, React Icons e muito carinho!
      </SDevelopedWith>
    </SFooter>
  );
}

export default Footer;
