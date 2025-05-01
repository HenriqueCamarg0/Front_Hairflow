import { useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import Container from '../../components/Shared/Layout/Container/Container';
import styles from './FuncionariosPage.module.css'; 

export default function FuncionariosPage() {
  const [setEmployees] = useState([]);

  // Função para adicionar um novo funcionário na lista
  function handleEmployeeSubmit(newEmployee) {
    setEmployees(prev => [...prev, newEmployee]);
  }

  return (
    <Container>
    <div>
    <div className={styles.welcomeSection}>
          <h1>Cadastro de Funcionários</h1>
        </div>
       <EmployeeForm onSubmit={handleEmployeeSubmit} />
      <EmployeeList />
    </div>
    </Container>
  );
}
