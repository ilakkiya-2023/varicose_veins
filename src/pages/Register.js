import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="form-container fade-in">
      <h2 className="form-title">Create Account ✨</h2>
      <p className="form-subtitle">Join us and take the first step</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="number" placeholder="Age" required />
        <select required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="btn-primary">Register</button>
      </form>

      <p onClick={() => navigate('/')} className="form-link">
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
};

export default Register;
