/* eslint-disable max-len */
import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/LearnMoreButton';
import Carrousel from '../components/Carrousel';

const SHomeContainer = styled.section`
  ${tw`
  flex
  flex-col
  gap-3
  m-4
  `}
  border: 1px solid red;
`;

const SAbout = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  `}
  border: 1px solid red;
  text-align: justify;
  li {
    list-style: none;
    border: 1px solid red;
    border-radius: 20px;
    padding: 5px;
    margin: 5px;
  }
`;

// const SCarrousel = styled.section`
//   ${tw`
//   flex
//   flex-col
//   justify-center
//   items-center
//   `}
//   width: 100%;
//   background: rgba(0, 0, 0, 0.414);
//   border-radius: 20px;
// `;

const SProjects = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  `}
    border: 1px solid red;
`;

const SSkills = styled.section`
  ${tw`
  // flex
  // flex-col
  // justify-center
  // items-center
  `}
    border: 1px solid red;
`;

const SContact = styled.section`
  ${tw`
  // flex
  // flex-col
  // justify-center
  // items-center
  `}
    border: 1px solid red;
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
        <ul>
          <p> Algumas curiosidades sobre mim </p>
          <li> Sou natural do Rio de Janeiro/RJ, porém resido em Belo Horizonte/MG há 18 anos </li>
          <li> Casado há 1 ano com o amor da minha vida </li>
          <li> Possuo uma cadelinha resgatada que é a alegria de casa </li>
          <li> Amo animais, amo natureza! </li>
          <li> A música me move. Ouço de tudo um pouco </li>
          <li> Aprendi a tocar violão sozinho </li>
          <li> Sou apaixonado por jogos e esportes eletrônicos </li>
        </ul>
        <Button
          onClick={ () => navigate('/about') }
          name="Saiba mais"
        />
      </SAbout>
      <SProjects>

        <Carrousel />

        <Button
          onClick={ () => navigate('/projects') }
          name="Saiba mais"
        />
      </SProjects>
      <SSkills>
        HABILIDADES COMPORTAMENTAIS
        <Button
          onClick={ () => navigate('/skills') }
          name="Saiba mais"
        />
      </SSkills>
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
