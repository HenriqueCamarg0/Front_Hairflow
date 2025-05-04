import { useState } from 'react';
import EmployeeForm from '../../components/employeeForm/EmployeeForm';
import EmployeeList from '../../components/employeeList/EmployeeList';
import styles from './FuncionariosPage.module.css'; 
import Container from '../../components/shared/layout/container/Container';

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
