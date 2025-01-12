import React, { useState } from 'react';

const doctors = [
  { name: 'Dr. Juan Pérez', specialty: 'Cardiología' },
  { name: 'Dra. Ana García', specialty: 'Pediatría' },
  { name: 'Dr. Luis Rodríguez', specialty: 'Neurología' }
];

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleAppointment = () => {
    if (selectedDoctor) {
      alert(`Cita agendada con ${selectedDoctor}`);
    } else {
      alert('Por favor, selecciona un doctor');
    }
  };

  return (
    <div>
      <h2>Lista de Doctores</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <h3>{doctor.name}</h3>
            <p>Especialidad: {doctor.specialty}</p>
          </li>
        ))}
      </ul>

      {/* Agregar formulario para agendar cita */}
      <div>
        <h3>Agendar Cita</h3>
        <select onChange={handleDoctorChange} value={selectedDoctor}>
          <option value="">Selecciona un doctor</option>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))}
        </select>
        <button onClick={handleAppointment}>Agendar Cita</button>
      </div>
    </div>
  );
};

export default DoctorList;
