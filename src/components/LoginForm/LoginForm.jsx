import React from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm({ onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Entrar</button>
      <button type="submit">Cadastrar</button>

      <p>Don't have an account? <a href="#">Sign up</a></p>    
      </form>
  );
}
