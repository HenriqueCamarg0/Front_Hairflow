import React from 'react';
import Container from '../../components/shared/layout/container/container';
import styles from './ServicosPage.module.css'; 

export default function ServicosPage() {
    return (
        <Container>
            <div className={styles.servicosPage}>
            <div style={{ padding: '20px' }}>
                <h1>Serviços</h1>
                <p>Esta é a página de serviços.</p>
            </div>
            <div style={{ padding: '20px' }}>
                <h2>Lista de Serviços</h2>
                <p>Lista de serviços...</p>

                <ul>
                    <li>Serviço 1</li>
                    <li>Serviço 2</li>
                    <li>Serviço 3</li>  
                    <li>Serviço 4</li>
                </ul>
            </div>
            </div>
        </Container>
    );
}