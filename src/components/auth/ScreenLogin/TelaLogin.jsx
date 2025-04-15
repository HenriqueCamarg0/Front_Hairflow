import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import styles from './TelaLogin.module.css';
import placeholder from '../../../assets/placeholder.svg';


export default function TelaLogin() {

  const [isLoginView, setIsLoginView] = useState(true);

  const handleViewToggle = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${!isLoginView ? styles.flip : ''}`}>
        <div className={styles.content}>
          {isLoginView ? (
            <LoginForm onSignUpClick={handleViewToggle} />
          ) : (
            <div className={styles.placeholderImage}>
              <img src={placeholder} alt="Welcome" />
            </div>
          )}
        </div>
      </div>

      <div className={`${styles.placeholder} ${isLoginView ? '' : styles.flip}`}>
        <div className={styles.content}>
          {isLoginView ? (
            <div className={styles.placeholderImage}>
              <img src={placeholder} alt="Welcome" />
            </div>
          ) : (
            <RegisterForm onLoginClick={handleViewToggle} />
          )}
        </div>
      </div>
    </div>
  );
}