import React from 'react';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../Inputs/InputField';
import GitHubButton from '../Buttons/GitHubButton';

const formFields = [
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "H@example.com",
    required: true
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    extraContent: true // Será usado para renderizar o ForgotPasswordButton
  }
];

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

      {formFields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          extraContent={field.extraContent ? <ForgotPasswordButton /> : null}
        />
      ))}

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
          onClick={() => navigate('/register')} 
        >
          Sign up
        </button>
      </div>
    </form>
  );
}