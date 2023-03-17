/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/LearnMoreButton';
import Footer from '../../components/Footer';
import Carrousel from '../../components/Carrousel';
import skillsImagesArray from '../../helpers/skillsImagesArray';

import SHomeContainer from './styles/SHomeContainer';
import SAbout from './styles/SAbout';
import SSkills from './styles/SSkills';
import SProjects from './styles/SProjects';
import SContact from './styles/SContact';

function Home() {
  const navigate = useNavigate();

  return (
    <SHomeContainer>
      <SAbout>
        <p>
          Olá, bem-vindo ao meu portfólio! Meu nome é Gustavo, tenho 30 anos e estou em transição de carreira.
          Oriundo da Engenharia Ambiental, decidi buscar novos desafios e encontrei na programação uma nova paixão e uma oportunidade de aplicar conhecimentos que adquiri na engenharia.

          Atualmente estou estudando Desenvolvimento Web Full Stack na Trybe, onde aprendo as tecnologias mais utilizadas no mercado de trabalho. Estou em busca de uma oportunidade de trabalho para colocar em prática os conhecimentos adquiridos e me tornar um profissional de tecnologia cada vez melhor.
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

      <SContact id="contact">
        <Footer />
      </SContact>
    </SHomeContainer>
  );
}

export default Home;
