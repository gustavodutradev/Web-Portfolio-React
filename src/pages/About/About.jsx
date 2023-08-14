/* eslint-disable max-len */
import React from 'react';
import gustavo from '../../data/reposImages/gustavo.png';
import SAboutContainer from './styles/SAboutContainer';

function Contact() {
  return (
    <SAboutContainer>
      <img
        src={ gustavo }
        alt="Gustavo"
      />
      <p>
        Olá, bem-vindo ao meu portfólio! Meu nome é Gustavo, tenho 30 anos e estou em transição de carreira.
        Comecei minha carreira Engenharia Ambiental e Sanitária, porém decidi buscar novos desafios e algo que me fizesse feliz, e encontrei na programação uma nova paixão e também uma oportunidade de aplicar conhecimentos que adquiri na engenharia.
      </p>
      <p>
        Atualmente estou capacitado para exercer a função de pessoa
        desenvolvedora Full-Stack, após ter concluído o curso de Desenvolvimento Web na Trybe. Estou em busca de uma oportunidade de trabalho para colocar em prática os conhecimentos adquiridos e me tornar um profissional de tecnologia cada vez melhor e com aprendizado contínuo.
      </p>
    </SAboutContainer>
  );
}

export default Contact;
