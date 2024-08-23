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
        Olá, bem-vindo ao meu portfólio! Meu nome é Gustavo, tenho 31 anos e estou em transição de carreira.
        Comecei minha trajetória no curso de Engenharia Ambiental e Sanitária no CEFET/MG, e mesmo tendo paixão pela área, senti que ela pouco evoluía quanto outras áreas no decorrer dos anos. Senti que precisava de mudanças.
      </p>
      <p>
        Pensando em uma carreira de longo prazo, com desafios e aprendizados constantes, decidi migrar para a área de tecnologia. Com essa escolha conseguiria aproveitar habilidades adquiridas na Engenharia, como resolução de problemas, raciocínio lógico, matemática, C/C++ e MatLAB. Da mesma maneira, sempre fui uma pessoa curiosa e com facilidade para computadores. Gosto de saber como as tecnologias funcionam, desde brinquedos quando criança, à computadores. Isso para que, um dia, se algo desse algum problema, conseguisse consertar meu carrinho ou formatar meu computador. E sempre tive paixão por conseguir resolver esses problemas e aprender algo novo.
      </p>
      <p>
        A área de tecnologia / desenvolvimento foi uma forma de transformar algo que era apenas hobby e paixão, em uma nova profissão.
      </p>
      <p>
        Concluí meus estudos em Desenvolvimento Web Full Stack em um curso de 1 ano de duração, e mais de 1500 horas de conteúdo e aulas ao vivo e gravadas. Possuo capacitação em tecnologias Front-End como React.Js, Javascript, TypeScript, Tailwind, Bootstrap, CSS, HTML, e também em tecnologias Back-End, como Python, TypeScript, Node.Js, SQL, Docker, MongoDB, MongoDB, API Rest, POO, dentre outras.
      </p>
      <p>
        Possuo projetos acadêmicos deste período, tanto individuais quanto experiências em grupo, e também trabalhos freelancer.
        Atualmente estou em busca da minha primeira oportunidade como desenvolvedor. Considero que tenho maior aptidão e gosto por Front-End, mas estou sempre aberto a quaisquer oportunidades que me façam crescer e aprender.

        Atualmente estou estudando Análise de Dados para aprofundar meus conhecimentos em Python e Machine Learning, e ainda em 2024 pretendo iniciar efetivamente uma graduação na área de tecnologia.
      </p>
    </SAboutContainer>
  );
}

export default Contact;
