import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Varicose Care</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/">Report</Link>
         <Link to="/">Teleconsultaion</Link>
        <Link to="/precautions">Precautions</Link>
        <Link to="/conditions">Conditions</Link>
        <Link to="/treatment">Treatment</Link>
        <Link to="/awareness">Awareness Module</Link>

       
        
      </nav>
    </div>
  );
};

export default Sidebar;
