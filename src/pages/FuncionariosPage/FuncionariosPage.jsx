import Container from '../../components/shared/layout/container/Container';
import EmployeeForm from '../../components/employeeForm/EmployeeForm';
import EmployeeList from '../../components/employeeList/EmployeeList';
import styles from './FuncionariosPage.module.css';

export default function FuncionariosPage() {
  return (
    <Container>
      <div>
        <div className={styles.welcomeSection}>
          <h1>Cadastro de Funcionários</h1>
        </div>
        <EmployeeForm/>
        <EmployeeList/>
      </div>
    </Container>
  );
}
