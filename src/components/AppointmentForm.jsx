import React, { useState, useRef, useEffect } from 'react';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus(); // Enfocar el campo de nombre al cargar
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agendar la cita
    console.log(`Cita agendada para ${name} en la especialidad de ${specialty}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>
      <label>
        Nombre:
        <input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Especialidad:
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </label>
      <button type="submit">Agendar</button>
    </form>
  );
};

export default AppointmentForm;