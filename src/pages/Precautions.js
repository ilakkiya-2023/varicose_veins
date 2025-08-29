// src/pages/Precautions.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './Precautions.css';

const Precautions = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="precautions-container">
        <h1>Precautions for Varicose Veins</h1>

        <section className="precaution-card">
          <h2>🪑 Avoid Prolonged Sitting or Standing</h2>
          <p>Take breaks to walk or stretch. Long periods of inactivity can lead to blood pooling in your legs.</p>
        </section>

        <section className="precaution-card">
          <h2>🧦 Wear Compression Stockings</h2>
          <p>These help improve blood flow in your legs by applying gentle pressure, reducing swelling and discomfort.</p>
        </section>

        <section className="precaution-card">
          <h2>⚖️ Maintain a Healthy Weight</h2>
          <p>Extra weight puts more pressure on your veins. A balanced diet and regular exercise can reduce the risk.</p>
        </section>

        <section className="precaution-card">
          <h2>🦵 Elevate Your Legs</h2>
          <p>Whenever possible, raise your legs above the level of your heart to promote blood flow back to the heart.</p>
        </section>

        <section className="precaution-card">
          <h2>🥦 Eat a High-Fiber, Low-Salt Diet</h2>
          <p>Reduce salt intake to prevent water retention. Fiber helps prevent constipation which can aggravate veins.</p>
        </section>

        <section className="precaution-card">
          <h2>🏃 Stay Physically Active</h2>
          <p>Engage in walking, cycling, or swimming to improve leg circulation and overall vascular health.</p>
        </section>
      </div>
    </div>
  );
};

export default Precautions;
