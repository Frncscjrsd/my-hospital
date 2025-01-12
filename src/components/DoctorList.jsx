import React, { useState, useEffect } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde una API
    const fetchDoctors = async () => {
      const data = [
        { id: 1, name: 'Dr. Juan Pérez' },
        { id: 2, name: 'Dra. Ana García' },
        { id: 3, name: 'Dr. Luis Martínez' },
      ];
      setDoctors(data);
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Listado de Doctores</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;