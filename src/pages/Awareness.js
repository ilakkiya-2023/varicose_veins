import React from 'react';
import Sidebar from '../components/Sidebar';
import './Awareness.css';

const Awareness = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="awareness-container">
        <h1>Awareness Module</h1>

        {/* FAQs Section */}
        <div className="awareness-section">
          <h2>FAQs</h2>
          <div className="faq">
            <h3>1. What are varicose veins?</h3>
            <p>Varicose veins are swollen, twisted veins that appear just under the skin, most commonly in the legs. They occur when the valves in the veins do not function properly, causing blood to pool and veins to enlarge.</p>

            <h3>2. What causes them?</h3>
            <p>Common causes include prolonged standing or sitting, pregnancy, obesity, aging, hormonal changes, and a family history of varicose veins. These factors increase pressure in the veins and lead to their weakening over time.</p>

            <h3>3. Can they be prevented?</h3>
            <p>While not all varicose veins can be prevented, the risk can be reduced by maintaining a healthy weight, exercising regularly, avoiding long periods of standing or sitting, and wearing compression stockings when recommended.</p>

            <h3>4. When should I see a doctor?</h3>
            <p>You should consult a doctor if you experience significant pain, swelling, skin discoloration, bleeding, or signs of ulcers or deep vein thrombosis (DVT). Early treatment can prevent complications.</p>
          </div>
        </div>

        {/* Awareness Videos */}
        <div className="awareness-section">
          <h2>Awareness Videos</h2>
          <div className="video-grid">
            <iframe src="https://www.youtube.com/embed/0fGgkvcMZVE" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/Z_7auCZI2Og" allowFullScreen></iframe>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="awareness-section">
          <h2>Do’s and Don’ts</h2>
          <div className="dos-donts">
            <div className="dos">
              <h3>Do’s</h3>
              <ul>
                <li>Wear compression stockings</li>
                <li>Exercise regularly</li>
                <li>Elevate legs while resting</li>
              </ul>
            </div>
            <div className="donts">
              <h3>Don’ts</h3>
              <ul>
                <li>Avoid standing too long</li>
                <li>Don’t cross legs while sitting</li>
                <li>Avoid tight clothes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Signs */}
        <div className="awareness-section">
          <h2>Emergency Signs</h2>
          <ul className="emergency-list">
            <li>Sudden swelling in legs</li>
            <li>Bleeding from varicose veins</li>
            <li>Severe pain or redness</li>
            <li>Signs of DVT like hard, warm veins</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
