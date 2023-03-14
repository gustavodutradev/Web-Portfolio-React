/* eslint-disable max-len */
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import javascript from '../../data/javascript.png';
import css from '../../data/css.png';
import html from '../../data/html5.png';
import react from '../../data/react.svg';
import Button from '../../components/LearnMoreButton';
import Carrousel from '../../components/Carrousel';

const SHomeContainer = styled.section`
  ${tw`
  flex
  flex-col
  gap-6
  `}
`;

const SAbout = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  `}
  color: #006594ee;
  font-weight: bold;
  text-align: justify;
  background-color: white;
  padding: 20px;
`;

const SProjects = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  `}
  background-color: #006494;
  padding: 20px;
  gap: 2rem;
`;

const SSkills = styled.section`
  ${tw`
  flex
  flex-wrap
  justify-center
  items-center
  `}
  img {
    width: 140px;
    height: auto;
    background: transparent;
    filter: drop-shadow(3px 3px 3px #1f1f1f);
    padding: 0 20px;
  }
`;

const SContact = styled.section`
  ${tw`
  // flex
  // flex-col
  // justify-center
  // items-center
  `}
`;

function Home() {
  const navigate = useNavigate();

  return (
    <SHomeContainer>
      <SAbout>
        <p>
          Olá, bem-vindo ao meu portfólio! Meu nome é Gustavo, tenho 30 anos e estou em transição de carreira.
          Oriundo da Engenharia Ambiental, decidi buscar novos desafios e encontrei na programação uma nova paixão.
          Atualmente estou estudando Desenvolvimento Web Full Stack na Trybe, onde aprendo as tecnologias mais utilizadas no mercado de trabalho. Estou em busca de uma oportunidade de trabalho para colocar em prática os conhecimentos adquiridos e me tornar um profissional de tecnologia cada vez melhor.
        </p>
        <Button
          onClick={ () => navigate('/about') }
          name="Saiba mais"
        />
      </SAbout>

      <SSkills>
        <div>
          <img src={ javascript } alt="css-logo" />
        </div>
        <div>
          <img src={ react } alt="css-logo" />
        </div>
        <div>
          <img src={ html } alt="css-logo" />
        </div>
        <div>
          <img src={ css } alt="css-logo" />
        </div>
      </SSkills>

      <SProjects>
        <Carrousel />
        <Button
          onClick={ () => navigate('/projects') }
          name="Saiba mais"
        />
      </SProjects>

      <SContact>
        CONTATO
        <Button
          onClick={ () => navigate('/contact') }
          name="Saiba mais"
        />
      </SContact>

    </SHomeContainer>
  );
}

export default Home;
