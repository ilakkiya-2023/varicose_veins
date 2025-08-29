import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileModal from '../components/ProfileModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content-area">
        <div className="top-bar">
          <button className="profile-btn" onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>
        <div className="upload-section">
          <h2>Upload Image of Affected Area</h2>
          <input type="file" accept="image/*" />
        </div>
      </div>
      <ProfileModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
