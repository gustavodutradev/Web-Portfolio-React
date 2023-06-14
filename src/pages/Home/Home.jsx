/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Button from '../../components/LearnMoreButton';
import skillsImagesArray from '../../helpers/skillsImagesArray';

import SAbout from './styles/SAbout';
import SHomeContainer from './styles/SHomeContainer';
import SProjects from './styles/SProjects';
import SSkills from './styles/SSkills';

function Home() {
  const navigate = useNavigate();

  return (
    <SHomeContainer>
      <SAbout>
        <p>
          Olá, bem-vindo ao meu portfólio! Meu nome é Gustavo, tenho 30 anos e estou em transição de carreira.
          Comecei minha carreira Engenharia Ambiental e Sanitária, porém decidi buscar novos desafios e algo que me fizesse feliz, e encontrei na programação uma nova paixão e também uma oportunidade de aplicar conhecimentos que adquiri na engenharia.
        </p>
        <p>
          Atualmente estou capacitado para exercer a função de
          desenvolvedora Full-Stack, após ter concluído o curso de Desenvolvimento Web na Trybe. Estou em busca de uma oportunidade de trabalho para colocar em prática os conhecimentos adquiridos e me tornar um profissional de tecnologia cada vez melhor e com aprendizado contínuo.
        </p>
        <Button
          onClick={ () => navigate('/about') }
          name="Saiba mais"
        />
      </SAbout>

      <SSkills>
        {
          skillsImagesArray.map((skill, index) => (
            <div key={ index }>
              <img src={ skill } alt={ `skill-${index}` } />
            </div>
          ))
        }
      </SSkills>

      <SProjects>
        <Carrousel />
        <Button
          onClick={ () => navigate('/projects') }
          name="Saiba mais"
        />
      </SProjects>
    </SHomeContainer>
  );
}

export default Home;
