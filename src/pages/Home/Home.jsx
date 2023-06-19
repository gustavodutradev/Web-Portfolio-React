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

      <SProjects>
        <Carrousel />
        <Button
          onClick={ () => navigate('/projects') }
          name="Veja todos os projetos"
        />
      </SProjects>
    </SHomeContainer>
  );
}

export default Home;
