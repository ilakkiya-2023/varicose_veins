import React from 'react';

const ProfileModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Profile</h3>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Age" />
        <select>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
