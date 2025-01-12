import React from 'react';
import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>Especialidad: {doctor.specialty}</p>
      <p>{doctor.description}</p>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default DoctorCard;