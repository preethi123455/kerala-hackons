import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import DonorHome from './Components/DonorHome';
import ReceiverHome from './Components/ReceiverHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor-home" element={<DonorHome />} />
        <Route path="/receiver-home" element={<ReceiverHome />} />
      </Routes>
    </Router>
  );
}

export default App;