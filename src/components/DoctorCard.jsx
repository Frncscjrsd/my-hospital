import React from 'react';
import PropTypes from 'prop-types';

const DoctorCard = ({ name, specialty }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Especialidad: {specialty}</p>
    </div>
  );
};

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
};

export default DoctorCard;