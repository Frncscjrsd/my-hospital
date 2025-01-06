import React, { useState } from 'react';

const AppointmentForm = ({ onAppointmentSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    onAppointmentSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Paciente:
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
        />
      </label>
      <label>
        Doctor:
        <input
          type="text"
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Agendar Cita</button>
    </form>
  );
};

export default AppointmentForm;