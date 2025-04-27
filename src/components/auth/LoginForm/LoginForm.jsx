import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../../service/auth.service';
import InputRegister from '../Inputs/InputRegister';
import GitHubButton from '../Buttons/GitHubButton';
import styles from './LoginForm.module.css'; // Importando o CSS

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
    extraContent: true // Para renderizar o botão de "Forgot Password?"
  }
];

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    if (email && senha) {
      try {
        const response = await AuthService.login({ email, password: senha });
        localStorage.setItem('token', response.token); // Armazenando token no localStorage
        navigate('/dashboard'); // Redireciona para o dashboard após o login bem-sucedido
      } catch (error) {
        alert('Erro no login: ' + error.message);
      }
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
        <InputRegister
          key={field.id}
          {...field}
          extraContent={field.extraContent ? <ForgotPasswordButton /> : null}
          value={field.name === 'email' ? email : senha}
          onChange={field.name === 'email' ? (e) => setEmail(e.target.value) : (e) => setSenha(e.target.value)}
        />
      ))}

      <button type="submit" className={styles.loginButton}>
        Login
      </button>

      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>

      <GitHubButton /> {/* Se você deseja usar o login via GitHub */}

      <div className={styles.signUpContainer}>
        <p>Don't have an account?</p>
        <button type="button" className={styles.signUpButton} onClick={() => navigate('/register')}>
          Sign up
        </button>
      </div>
    </form>
  );
}
