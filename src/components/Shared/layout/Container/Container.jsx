import React from 'react';
import Header from '../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Container.module.css';

export default function Container({ children }) {
  const menuItems = [
    'Dashboard',
    'Agenda',
    'Funcionários',
    'Serviços'
  ];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Toolbar items={menuItems} onSelect={handleSelect} />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}