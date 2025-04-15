import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulação de login bem-sucedido
    console.log('Login realizado!');
    navigate('/dashboard'); // Redireciona para o Dashboard
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
