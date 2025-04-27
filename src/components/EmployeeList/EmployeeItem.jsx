export default function EmployeeItem({ funcionario, onEdit, onDelete }) {
    return (
      <li>
        {funcionario.name} - {funcionario.email}
        <button onClick={() => onEdit(funcionario)}>Editar</button>
        <button onClick={() => onDelete(funcionario.id)}>Excluir</button>
      </li>
    );
  }
  