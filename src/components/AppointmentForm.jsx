import React, { useRef } from 'react';

const AppointmentForm = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Enfoca el campo de texto
  };

  return (
    <div>
      <h1>Agendar Cita</h1>
      <form>
        <label htmlFor="name">Nombre del Paciente:</label>
        <input ref={inputRef} type="text" id="name" placeholder="Ingresa tu nombre" />
        <button type="button" onClick={handleFocus}>
          Enfocar Campo
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;