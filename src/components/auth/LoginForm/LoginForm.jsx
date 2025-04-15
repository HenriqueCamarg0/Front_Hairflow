import React from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';


export default function LoginForm({ onLoginClick }) {
  const navigate = useNavigate();
  // Função para lidar com o envio do formulário
  // Aqui você pode adicionar a lógica para autenticação, como chamadas de API
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Aqui você pode adicionar a lógica de autenticação, como chamadas de API
    // Exemplo de validação simples
    if (email && password) {
      alert('Login efetuado com sucesso!');
      navigate('/dashboard');
      console.log('Email:', email, 'Senha:', password);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      {/* Cabeçalho do formulário */}
      <div className={styles.header}>
        <h1>Login to your account</h1>
        <p>Enter your email below to login to your account</p>
      </div>

      {/* Campo de email */}
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="H@example.com"
          required
        />
      </div>

      {/* Campo de senha */}
      <div className={styles.field}>
        <div className={styles.passwordRow}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <button type="button" className={styles.forgotPassword}>
            Forgot your password?
          </button>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Botão de login */}
      <button type="submit" className={styles.loginButton}>
        Login
      </button>

      {/* Divisor */}
      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>

      {/* Botão de GitHub */}
      <button type="button" className={styles.githubButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.githubIcon}
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
            fill="currentColor"
          />
        </svg>
        Login with GitHub
      </button>
      
      <div className={styles.signUpContainer}>
        <p>Don't have an account?</p>
        <button 
          type="button" 
          className={styles.signUpButton}
          onClick={onLoginClick}
        >
          Sign up
        </button>
      </div>
    </form>
  );  
}