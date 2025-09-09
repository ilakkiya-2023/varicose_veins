import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container fade-in">
      <h2 className="form-title">Welcome Back 👋</h2>
      <p className="form-subtitle">Login to continue your journey</p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="btn-primary">Login</button>
      </form>

      <div className="divider">OR</div>

      <p onClick={() => navigate('/register')} className="form-link">
        Don’t have an account? <span>Register</span>
      </p>
    </div>
  );
};

export default Login;
