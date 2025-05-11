import { useState, useEffect } from 'react';
import { listarFuncionarios } from '../../service/Funcionarios.service'; // Função que busca os funcionários
import { Calendar, Clock, User, Phone, FileText, Check, X } from 'lucide-react';
import styles from './AppointmentForm.module.css';

export default function AppointmentForm({ onAppointmentCreated }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profissional, setProfissional] = useState('');
  const [description, setDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]); // Estado para armazenar os funcionários disponíveis

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  // Buscar funcionários da API
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await listarFuncionarios();
        setEmployees(response); // Guarda os funcionários no estado
      } catch (err) {
        console.error('Erro ao carregar funcionários:', err);
      }
    }
    fetchEmployees();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);

    const newAppointment = {
      date: selectedDate,
      time: selectedTime,
      name,
      phone,
      profissional,
      description
    };

    if (onAppointmentCreated) {
      onAppointmentCreated(newAppointment);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setPhone('');
    setProfissional('');
    setDescription('');
  };

  return (
    <div className={styles.appointmentCard}>
      <h2 className={styles.sectionTitle}>
        <Calendar className={styles.iconMargin} size={20} />
        Agendar Novo Compromisso
      </h2>

      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGrid}>
          <div>
            <label className={styles.formLabel}>Selecione a Data</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={styles.formInput}
              required
            />
          </div>

          <div>
            <label className={styles.formLabel}>Selecione o Horário</label>
            <div className={styles.timeGrid}>
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`${styles.timeButton} ${selectedTime === time ? styles.timeButtonSelected : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  <Clock size={14} className={styles.iconMarginSmall} />
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.formFieldsContainer}>
          <div>
            <label className={styles.formLabel}>Nome Completo</label>
            <div className={styles.inputContainer}>
              <User size={20} className={styles.inputIcon} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
                placeholder="Digite seu nome completo"
                required
              />
            </div>
          </div>

          <div>
            <label className={styles.formLabel}>Telefone</label>
            <div className={styles.inputContainer}>
              <Phone size={20} className={styles.inputIcon} />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputField}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
          </div>

          <div>
            <label className={styles.formLabel}>Profissional</label>
            <div className={styles.inputContainer}>
              <User size={20} className={styles.inputIcon} />
              <select
                value={profissional}
                onChange={(e) => setProfissional(e.target.value)}
                className={styles.inputField}
                required
              >
                <option value="" disabled>Selecione um profissional</option>
                {employees.map(employee => (
                  <option key={employee.id} value={employee.name}>{employee.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={styles.formLabel}>Descrição</label>
            <div className={styles.inputContainer}>
              <FileText size={20} className={styles.inputIconTextarea} />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.inputField}
                rows="4"
                placeholder="Descreva o motivo do agendamento"
              ></textarea>
            </div>
          </div>
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.submitButton}>
            <Check size={18} className={styles.iconMarginSmall} />
            Confirmar Agendamento
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Agendamento Confirmado</h3>
              <button onClick={closeModal} className={styles.modalCloseButton}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.successAlert}>
              <div className={styles.successMessage}>
                <Check className={styles.iconMarginSmall} />
                <p className={styles.messageText}>Seu agendamento foi realizado com sucesso!</p>
              </div>
            </div>

            <div className={styles.appointmentDetails}>
              <p className={styles.detailItem}>
                <User size={16} className={styles.iconMarginSmall} /> <span className={styles.detailLabel}>Nome:</span> {name}
              </p>
              <p className={styles.detailItem}>
                <User size={16} className={styles.iconMarginSmall} /> <span className={styles.detailLabel}>Profissional:</span> {profissional}
              </p>
              <p className={styles.detailItem}>
                <Calendar size={16} className={styles.iconMarginSmall} /> <span className={styles.detailLabel}>Data:</span> {selectedDate}
              </p>
              <p className={styles.detailItem}>
                <Clock size={16} className={styles.iconMarginSmall} /> <span className={styles.detailLabel}>Horário:</span> {selectedTime}
              </p>
            </div>

            <button onClick={closeModal} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}