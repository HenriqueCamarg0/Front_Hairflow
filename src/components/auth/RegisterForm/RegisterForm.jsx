import React from 'react';
import styles from './RegisterForm.module.css';
import InputRegister from '../Inputs/InputRegister';
import { useNavigate } from 'react-router-dom';

const formFields = [
  {
    id: 'name',
    name: 'name',
    label: 'Nome Completo',
    type: 'text',
    placeholder: 'Digite seu nome completo',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'seu@email.com',
    required: true
  },
  {
    id: 'password',
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    required: true
  }
];

export default function RegisterForm({ onLoginClick }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.name && data.email && data.password) {
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.header}>
            <h1>Create Account</h1>
            <p>Fill in the details to register</p>
        </div>

        {formFields.map((field) => (
            <InputRegister
                key={field.id}
                {...field}
            />
        ))}

        <button type="submit" className={styles.registerButton}>
            Register
        </button>

        <div className={styles.loginContainer}>
            <p>Already have an account?</p>
            <button 
                type="button" 
                className={styles.loginLink}
                onClick={() => navigate('/Login')} 
                >
                Login
            </button>
        </div>
    </form>
);
}