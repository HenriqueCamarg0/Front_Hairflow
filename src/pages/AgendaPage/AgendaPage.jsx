import React from 'react';
import Container from '../../components/Shared/layout/Container/Container';
import styles from './AgendaPage.module.css'; 

export default function AgendaPage() {
    return (
        <Container>
        <div className={styles.agendaPage}>    
        <div style={{ padding: '20px' }}>
            <h1>Agenda</h1>
            <p>Esta é a página de agenda.</p>
        </div>

        <div style={{ padding: '20px' }}>
            <h2>Agendamentos</h2>
            <p>Lista de agendamentos...</p>

            <ul>
                <li>Agendamento 1</li>
                <li>Agendamento 2</li>
                <li>Agendamento 3</li>  
                <li>Agendamento 4</li>

            </ul>
        </div>
        </div>
        </Container>
    );
}