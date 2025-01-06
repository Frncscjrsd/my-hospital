import React, { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Simulación de datos cargados al montar el componente
    setDoctors([
      { id: 1, name: 'Dr. Sebastian Pozo', specialty: 'Cardiología', experience: 10 },
      { id: 2, name: 'Dra. Catalina Vilches', specialty: 'Neurología', experience: 8 },
    ]);

    setServices(['Radiología', 'Pediatría', 'Urgencias']);
  }, []);

  const handleAppointmentSubmit = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Sistema de Hospital</h1>

      <section>
        <h2>Doctores</h2>
        <div className="doctor-list">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      <section>
        <h2>Servicios</h2>
        <ServiceList services={services} />
      </section>

      <section>
        <h2>Agendar Cita</h2>
        <AppointmentForm onAppointmentSubmit={handleAppointmentSubmit} />
      </section>

      <section>
        <h2>Citas Agendadas</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              {appointment.patientName} - {appointment.doctor} - {appointment.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
