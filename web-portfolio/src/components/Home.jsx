import React from 'react';
import fotoHome from '../data/fotoHome.png';

function Home() {
  return (
    <section className="home-container">  
    <section className="slogan">
      <section>
        <p className="presentation-text"> Hi, I'm Gustavo</p>
        <p className="presentation-title">I'm a brazilian student of full stack web development.</p>
        <h1 className="presentation-description">Focused on building value through continuous learning and teamwork.</h1>
      </section>
      <section className="foto-container">
        <img
        src={fotoHome}
        alt="Gustavo Barros Dutra Santos"
        className="foto-home"
        />
      </section>
      </section> 
    </section>
  );
};

export default Home;