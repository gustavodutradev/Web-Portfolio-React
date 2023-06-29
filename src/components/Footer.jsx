/* eslint-disable max-len */
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const SFooter = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    background: #131313;
    background: -webkit-linear-gradient(0deg, #131313 0%, #161616 100%);
    background: linear-gradient(0deg, #131313 0%, #161616 100%);
    height: auto;
    width: 100vw;
    color: #fff;
    outline: none;
    border: none;
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

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(0deg, #080808 0%, #131313 100%);
  background: linear-gradient(0deg, #080808 0%, #131313 100%);
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  border: none;
  outline: none;
`;

const SDevelopedWith = styled.p`
width: 100vw;
margin: 0;
position: relative;
bottom: 0;
display: flex;
text-align: center;
justify-content: center;
font-size: 9px;
color: #fff;
background: -webkit-linear-gradient(0deg, #020202 0%, #080808 100%);
background: linear-gradient(0deg, #020202 0%, #080808 100%);
padding: 0.5rem 0.8rem;
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
          <a href="mailto:gustavobdsdev@gmail.com">
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
      <SInfo>
        <span>+55(31)99227-8262 · gustavobdsdev@gmail.com</span>
      </SInfo>
      <SDevelopedWith>
        Desenvolvido por Gustavo Dutra, utilizando React, Tailwind, Styled Components, Bootstrap, React Icons e muito carinho!
      </SDevelopedWith>
    </SFooter>
  );
}

export default Footer;
