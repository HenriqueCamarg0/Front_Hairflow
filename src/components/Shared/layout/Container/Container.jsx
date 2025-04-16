import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Container.module.css';

export default function Container({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Funcionários', path: '/funcionarios' },
    { name: 'Serviços', path: '/servicos' }
  ];

  const handleSelect = (item) => {
    navigate(item.path);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.toolbar}>
          <Toolbar 
            items={menuItems.map(item => item.name)} 
            onSelect={(name) => {
              const item = menuItems.find(i => i.name === name);
              if (item) handleSelect(item);
            }}
          />
        </div>
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}