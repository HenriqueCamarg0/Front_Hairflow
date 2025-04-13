import React from 'react';
import LoginForm from '../LoginForm/LoginForm'; // Importando o LoginForm
import styles from './TelaLogin.module.css'
import placeholder from '../../assets/placeholder.svg'

export default function TelaLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email, 'Senha:', password);
  };

return (
<div className={styles.wrapper}> 
    <div className={styles.container}>
        <h1>Login to your account</h1>
        <p>Enter your email below to login to your account</p>
        <LoginForm onSubmit={handleLogin} />
    </div>
    <div className={styles.placeholder}>
        <img src={placeholder} alt="" />
    </div>
</div>
);
}
