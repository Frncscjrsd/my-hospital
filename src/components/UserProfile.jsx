import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>ID: {user.id}</p>
    </div>
  );
};

export default UserProfile;