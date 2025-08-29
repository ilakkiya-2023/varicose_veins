// src/pages/Conditions.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './Conditions.css';

const Conditions = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="conditions-container">
        <h1>Varicose Vein Conditions</h1>

        <section className="condition-section">
          <h2>🟢 Mild Swelling & Discoloration</h2>
          <p>This is often the earliest sign of varicose veins. Patients may notice slight swelling around the ankles or a bluish tint on the skin.</p>
        </section>

        <section className="condition-section">
          <h2>🔵 Twisted, Enlarged Veins</h2>
          <p>Veins appear bulging, twisted, and blue or dark purple. This is the most recognizable symptom of varicose veins, usually seen on legs and feet.</p>
        </section>

        <section className="condition-section">
          <h2>🟡 Venous Ulcers</h2>
          <p>Open sores near the ankles caused by prolonged pressure and poor circulation. These require medical attention and can take weeks to heal.</p>
        </section>

        <section className="condition-section">
          <h2>🔴 Deep Vein Thrombosis (DVT)</h2>
          <p>A serious complication where blood clots form in deeper veins. Symptoms include leg pain, swelling, and redness. It can be life-threatening if untreated.</p>
        </section>

        <section className="condition-section">
          <h2>🔁 Chronic Venous Insufficiency</h2>
          <p>A long-term condition where the veins fail to pump blood efficiently back to the heart. It may lead to heaviness in legs, skin changes, and persistent swelling.</p>
        </section>
      </div>
    </div>
  );
};

export default Conditions;
