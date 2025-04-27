import React from 'react';
import Container from '../../components/Shared/Layout/Container/Container';
import styles from './FuncionariosPage.module.css';

export default function FuncionariosPage() {
    return (
        <Container>
            <div className={styles.funcionariosPage}>
            <div style={{ padding: '20px' }}>
                <h1>Funcionários</h1>
                <p>Esta é a página de funcionários.</p>
            </div>
            <div style={{ padding: '20px' }}>
                <h2>Lista de Funcionários</h2>
                <p>Lista de funcionários...</p>

                <ul>
                    <li>Funcionário 1</li>
                    <li>Funcionário 2</li>
                    <li>Funcionário 3</li>  
                    <li>Funcionário 4</li>
                </ul>
            </div>
            </div>
        </Container>
    );
}