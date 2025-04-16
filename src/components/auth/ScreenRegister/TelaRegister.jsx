import React from 'react';
import styles from './TelaRegister.module.css';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function TelaRegister({ onLoginClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <RegisterForm onLoginClick={onLoginClick} />
      </div>
      <div className={styles.imageSection}>
        <img 
          src="/path-to-your-image.jpg" 
          alt="Register illustration" 
          className={styles.image}
        />
      </div>
    </div>
  );
}