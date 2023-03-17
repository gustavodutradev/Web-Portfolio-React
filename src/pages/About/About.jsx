// import React from 'react';

// function About() {
//   return (
//     <div>
//       <ul>
//         <p> Algumas curiosidades sobre mim </p>
//         <li>
//           Sou natural do Rio de Janeiro/RJ, porém resido em Belo Horizonte/MG há 18 anos
//         </li>
//         <li> Casado há 1 ano com o amor da minha vida </li>
//         <li> Possuo uma cadelinha resgatada que é a alegria de casa </li>
//         <li> Amo animais, amo natureza! </li>
//         <li> A música me move. Ouço de tudo um pouco </li>
//         <li> Aprendi a tocar violão sozinho </li>
//         <li> Sou apaixonado por jogos e esportes eletrônicos </li>
//       </ul>
//     </div>
//   );
// }

// export default About;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';
import skillsMindSight from '../../data/skillsImages/skillsMindSight.png';
import table from '../../data/skillsImages/table.png';

function Contact() {
  return (
    <main className="main-skills">
      <section className="skills-container">
        <section className="soft-skills-container">
          <section className="soft-skills-summary">
            <div className="main-paragraph">
              Abaixo você verá meus resultados de mapeamento de perfil realizado no dia 18/03/2022 pela empresa MindSight, como parte do processo seletivo para ser estudante da Trybe.
              Neste gráfico está representada uma relação entre meu score e o score da média de 2353 pessoas, com perfil de analista, coordenação e gerência, de todas as áreas. Os atributos foram construídos utilizando um frame de personalidade chamado Big Five.
              O Big Five é um frame de personalidade considerado universal. Entre os psicólogos organizacionais é um consenso em termos de efetividade de avaliação.

              <p className="legend-blue">Linha azul: Score médio</p>
              <p className="legend-green">Linha verde: Meu score</p>
            </div>
          </section>
          <section className="img-container">
            <label htmlFor="soft-skills-img">
              <img src={ skillsMindSight } alt="Soft-Skills" id="soft-skills-img" />
            </label>
          </section>
        </section>
        <section className="table-container">
          <label htmlFor="table-img">
            <img src={ table } alt="Table" id="table-img" />
          </label>
        </section>
      </section>
    </main>
  );
}

export default Contact;
