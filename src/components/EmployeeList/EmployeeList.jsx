import { useEffect, useState } from 'react';
import { listarFuncionarios, deletarFuncionario } from '../../service/Funcionarios.service'; // Função para listar e deletar

import styles from './EmployeeList.module.css'; // Importando o CSS Module

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carrega os funcionários
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await listarFuncionarios();
        setEmployees(response);
      } catch (err) {
        console.error('Erro ao carregar funcionários:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  // Função para excluir funcionário
  const handleDelete = async (id) => {
    try {
      await deletarFuncionario(id); // Função para deletar o funcionário da API
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id)); // Remove o funcionário da lista local
    } catch (err) {
      console.error('Erro ao excluir funcionário:', err);
    }
  };

  return (
    <div className={styles.list}>
      {loading ? (
        <div className={styles.spinner}>Carregando...</div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className={styles.employeeItem}>
              <div className={styles.employeeName}>{employee.name}</div>
              <div className={styles.employeeDetails}>
                <span>{employee.email}</span> - <span>{employee.phone}</span>
              </div>
              <div className={styles.employeeActions}>
                <button className={styles.buttonEdit}>Editar</button>
                <button className={styles.buttonDelete} onClick={() => handleDelete(employee.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
