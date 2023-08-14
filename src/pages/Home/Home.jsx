/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/LearnMoreButton';
import TFC from '../../data/reposImages/TFC.png';
import login from '../../data/reposImages/loginmockup.png';
import onlinestore from '../../data/reposImages/onlinestore1.png';
import skillsImagesArray from '../../helpers/skillsImagesArray';

import SAbout from './styles/SAbout';
import SHomeContainer from './styles/SHomeContainer';
import SProjectCard from './styles/SProjectCard';
import SProjectsContainer from './styles/SProjects';
import SSkills from './styles/SSkills';

function Home() {
  const navigate = useNavigate();
  const repo = 'Repositório';

  return (
    <SHomeContainer>
      <SAbout>
        <h1>
          OI, EU SOU O GUSTAVO.
        </h1>
        <p>
          Tenho 30 anos, sou desenvolvedor Full-Stack com 1 ano de experiência estudando e trabalhando como freelancer.
        </p>
        <Button
          onClick={ () => navigate('/about') }
          name="Saiba mais sobre mim"
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

      <SProjectsContainer>
        <SProjectCard>
          <h3> App Delivery </h3>
          <img src={ login } alt="project" />
          <p> MPV Aplicativo Delivery de Bebidas </p>
          <a href="https://github.com/Gustavo-trybedev/App-Delivery" target="_blank" rel="noreferrer">
            { repo }
          </a>
        </SProjectCard>
        <SProjectCard>
          <h3> Online Store </h3>
          <img src={ onlinestore } alt="project" />
          <p> Market Place baseado no Mercado Livre </p>
          <a href="https://github.com/Gustavo-trybedev/Project-Online-Store" target="_blank" rel="noreferrer">
            { repo }
          </a>
        </SProjectCard>
        <SProjectCard>
          <h3> Trybe Futebol Clube </h3>
          <img src={ TFC } alt="project" />
          <p>Tabela de classificação de times em TypeScript e POO</p>
          <a href="https://github.com/Gustavo-trybedev/TFC" target="_blank" rel="noreferrer">
            { repo }
          </a>
        </SProjectCard>
      </SProjectsContainer>
      <Button
        onClick={ () => navigate('/projects') }
        name="Veja todos os projetos"
      />
    </SHomeContainer>
  );
}

export default Home;
