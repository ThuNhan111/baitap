import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Giả lập xác thực
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default Login;
