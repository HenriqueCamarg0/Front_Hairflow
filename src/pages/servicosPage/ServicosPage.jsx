import React from 'react';
import Container from '../../components/shared/layout/container/Container';
import styles from './ServicosPage.module.css'; 

export default function ServicosPage() {
    return (
        <Container>
        <div className={styles.welcomeSection}>
          <h1>Cadastro de Serviços</h1>
        </div>
        </Container>
    );
}