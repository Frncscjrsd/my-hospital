import React from 'react';
import DoctorList from './components/DoctorList';
import AppointmentForm from './components/AppointmentForm';
import UserProfile from './components/UserProfile';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <DoctorList />
        <AppointmentForm />
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
