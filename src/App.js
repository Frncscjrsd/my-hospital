import React from 'react';
import DoctorList from './components/DoctorList';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <DoctorList />
      <UserProfile />
    </div>
  );
}

export default App;
