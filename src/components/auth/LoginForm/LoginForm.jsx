import React from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../Inputs/InputField';
import GitHubButton from '../Buttons/GitHubButton';

export default function LoginForm({ onLoginClick }) {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email && password) {
      alert('Login efetuado com sucesso!');
      navigate('/dashboard');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  const ForgotPasswordButton = () => (
    <button type="button" className={styles.forgotPassword}>
      Forgot your password?
    </button>
  );

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.header}>
        <h1>Login to your account</h1>
        <p>Enter your email below to login to your account</p>
      </div>

      <InputField
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="H@example.com"
        required
      />

      <InputField
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
        extraContent={<ForgotPasswordButton />}
      />

      <button type="submit" className={styles.loginButton}>
        Login
      </button>

      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>

      <GitHubButton />
      
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