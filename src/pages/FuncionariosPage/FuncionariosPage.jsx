import { useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import Container from '../../components/Shared/Layout/Container/Container';

export default function FuncionariosPage() {
  const [employees, setEmployees] = useState([]);

  // Função para adicionar um novo funcionário na lista
  function handleEmployeeSubmit(newEmployee) {
    setEmployees(prev => [...prev, newEmployee]);
  }

  return (
    <Container>
    <div>
      <h1>Funcionários</h1>
      <EmployeeForm onSubmit={handleEmployeeSubmit} />
      <EmployeeList />
    </div>
    </Container>
  );
}
