import { useEffect, useState } from 'react';
import { listarFuncionarios, atualizarFuncionario, deletarFuncionario  } from '../../service/Funcionarios.service'; // Funções para listar e atualizar
import styles from './EmployeeList.module.css'; // Importando o CSS Module

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null); // Estado para armazenar o funcionário sendo editado
  const [error, setError] = useState(null);

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

  const handleEditClick = (employee) => {
    setEditingEmployee(employee); // Quando o botão de editar for clicado, armazenamos o funcionário
  };

    // Função para atualizar funcionário
  const handleUpdate = async (updatedEmployee) => {
    try {
      const response = await atualizarFuncionario(updatedEmployee.id, updatedEmployee);
      console.log('Funcionário atualizado com sucesso:', response);
      // Atualiza a lista de funcionários após a edição
      setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
      setEditingEmployee(null); // Fecha o modal de edição
    } catch (err) {
      console.error('Erro ao atualizar funcionário:', err);
      setError('Erro ao atualizar funcionário.');
    }
  };

  // Função para deletar funcionário
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
        <div>Carregando...</div>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee.id} className={styles.employeeItem}>
              <span className={styles.employeeName}>{employee.name}</span>
              <div className={styles.employeeActions}>
                <button className={styles.buttonEdit} onClick={() => handleEditClick(employee)}>Editar</button>
                <button className={styles.buttonDelete} onClick={() => handleDelete(employee.id)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal de edição */}
      {editingEmployee && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar Funcionário</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingEmployee);
            }}>
              <input
                type="text"
                value={editingEmployee.name}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, name: e.target.value })}
                placeholder="Nome"
                className={styles.inputField}
              />
              <input
                type="email"
                value={editingEmployee.email}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, email: e.target.value })}
                placeholder="Email"
                className={styles.inputField}
              />
              <input
                type="text"
                value={editingEmployee.phone}
                onChange={(e) => setEditingEmployee({ ...editingEmployee, phone: e.target.value })}
                placeholder="Telefone"
                className={styles.inputField}
              />
              <button type="submit" className={styles.saveButton}>Salvar alterações</button>
            </form>
            <button className={styles.cancelButton} onClick={() => setEditingEmployee(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
