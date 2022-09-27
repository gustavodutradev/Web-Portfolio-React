import React from 'react';
import skillsMindSight from '../data/skillsMindSight.png';
import table from '../data/table.png';

function Skills() {
  return (
    <section className="skills-container">
    <section className="soft-skills-container">
      <section className="soft-skills-summary">
    <div className="main-paragraph">
    Abaixo você verá meus resultados de mapeamento de perfil realizado no dia 18/03/2022 pela empresa MindSight, como parte do processo seletivo para ser estudante da Trybe.
    < br />
    < br />
    Neste gráfico está representada uma relação entre meu score e o score da média de 2353 pessoas, com perfil de analista, coordenação e gerência, de todas as áreas. Os atributos foram construídos utilizando um frame de personalidade chamado Big Five.
    < br />
    < br />
    O Big Five é um frame de personalidade considerado universal. Entre os psicólogos organizacionais é um consenso em termos de efetividade de avaliação.

    <p>Linha azul: Score médio</p>
    <p>Linha verde: Meu score</p>
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
  )
}

export default Skills