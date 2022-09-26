import React, { Component } from 'react';
import fotoHome from '../data/fotoHome.png';

class Home extends Component {
  render() {
    return (
      <section className="home-container">  
      <section className="slogan">
        <section>
          <p className="presentation-text"> Hi, I'm Gustavo.</p>
          <h1 className="presentation-title">I build value through code and soft skills.</h1>
          <p className="presentation-description">I'm a brazilian developer who loves to code.</p>
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
    )
  }
}

export default Home;
