// src/components/Home.jsx
import React from 'react';
import ServiceList from './ServiceList';

const Home = () => {
  return (
    <React.Fragment>
      <h1>Bienvenido al Hospital</h1>
      <section>
        <h2>Servicios Destacados</h2>
        <ServiceList />
      </section>
      <section>
        <h2>Información del Hospital</h2>
        <p>Hospital de referencia en atención médica con un equipo de profesionales altamente capacitados.</p>
      </section>
    </React.Fragment>
  );
};

export default Home;