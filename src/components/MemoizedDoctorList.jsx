import React from 'react';

const MemoizedDoctorList = React.memo(({ doctors }) => {
  return (
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.id}>{doctor.name}</li>
      ))}
    </ul>
  );
});

export default MemoizedDoctorList;