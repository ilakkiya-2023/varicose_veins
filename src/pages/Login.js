import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate('/register')}>Don't have an account? Register</p>
    </div>
  );
};

export default Login;
