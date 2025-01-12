import React, { useState, useEffect, Profiler } from 'react';
import DoctorCard from './DoctorCard';

const EquipoMedico = () => {
  const [doctors, setDoctors] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('https://api.example.com/doctors');
      const data = await response.json();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.specialty.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRender = (id, phase, actualDuration) => {
    console.log(`Rendered ${id} in ${actualDuration}ms during ${phase} phase`);
  };

  // Estilos en línea
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
    },
    header: {
      textAlign: 'center',
      fontSize: '2em',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '1em',
      marginBottom: '20px',
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      display: 'block',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    doctorList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    cardContainer: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
  };

  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1 style={styles.header}>Equipo Médico</h1>
        <input
          type="text"
          placeholder="Filtrar por especialidad"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.input}
        />
        <div style={styles.doctorList}>
          <Profiler id="DoctorList" onRender={handleRender}>
            {filteredDoctors.map((doctor) => (
              <div style={styles.cardContainer} key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </Profiler>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EquipoMedico;
