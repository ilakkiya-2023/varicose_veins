import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Precautions from './pages/Precautions';
import Conditions from './pages/Conditions';
import Treatment from './pages/Treatment';
import Awareness from './pages/Awareness';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/precautions" element={<Precautions />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/awareness" element={<Awareness />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
