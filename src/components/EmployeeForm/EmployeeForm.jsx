import { useState } from 'react';
import WorkDaysSelector from '../WorkDaysSelector/WorkDaysSelector';
import styles from './EmployeeForm.module.css';
import { cadastrarFuncionario } from '../../service/Funcionarios.service';

export default function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workDays: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  function resetForm() {
    setFormData({ name: '', email: '', phone: '', workDays: [] });
    setError(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleWorkDaysChange(selectedDays) {
    setFormData(prev => ({ ...prev, workDays: selectedDays }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsProcessing(true);

    try {
      const response = await cadastrarFuncionario(formData);
      console.log('Funcionário salvo com sucesso:', response);

      resetForm();
      onSubmit(response);

      setTimeout(() => {
        setIsProcessing(false);
      }, 10000);

    } catch (err) {
      console.error('Erro ao salvar funcionário:', err);
      setError('Erro ao salvar funcionário. Tente novamente.');
      setIsProcessing(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
      />
      <WorkDaysSelector selectedDays={formData.workDays} onChange={handleWorkDaysChange} />
      
      {error && <p className={styles.error}>{error}</p>}
      {loading && <div className={styles.spinner}>Carregando...</div>}
      {isProcessing && <div className={styles.spinner}>Aguarde enquanto processamos...</div>}

      <button type="submit" className={styles.button} disabled={loading || isProcessing}>
        {loading || isProcessing ? 'Salvando...' : 'Cadastrar Funcionário'}
      </button>
    </form>
  );
}
