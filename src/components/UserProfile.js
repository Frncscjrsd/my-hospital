import React from 'react';

const user = {
  name: 'Francisco Jara',
  age: 30,
  email: 'francisco@hospital.com',
};

const UserProfile = () => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;