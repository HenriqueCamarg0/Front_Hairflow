import React from 'react';
import Container from '../../components/Shared/layout/Container/Container';
import styles from './DashboardPage.module.css'; // Importando o CSS do DashboardPage

export default function DashboardPage() {
  return (
    <Container>
      <div className={styles.dashboard}>
        <div className={styles.welcomeSection}>
          <h1>Bem-vindo ao Hair Flow</h1>
          <p>Painel de Controle</p>
        </div>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Agendamentos Hoje</h3>
            <p className={styles.statNumber}>12</p>
          </div>
          <div className={styles.statCard}>
            <h3>Clientes Ativos</h3>
            <p className={styles.statNumber}>150</p>
          </div>
          <div className={styles.statCard}>
            <h3>Serviços</h3>
            <p className={styles.statNumber}>8</p>
          </div>
          <div className={styles.statCard}>
            <h3>Funcionários</h3>
            <p className={styles.statNumber}>5</p>
          </div>
        </div>
      </div>
    </Container>
  );
}