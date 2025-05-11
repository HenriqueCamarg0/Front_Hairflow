import { useState } from 'react';
import Container from '../../components/shared/layout/container/Container';
import AppointmentForm from '../../components/appointmentForm/AppointmentForm';
import AppointmentList from '../../components/appointmentList/AppointmentList';
import styles from './AgendaPage.module.css';

export default function AgendaPage() {
  const [appointments, setAppointments] = useState([]);
  
  const handleAppointmentCreated = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <Container>
      <div className={styles.appContainer}>
          <div className={styles.container}>
            <h1 className={styles.headerTitle}>Sistema de Agendamentos</h1>
          </div>
        
        <main className={styles.mainContainer}>
          <div className={styles.pageGrid}>
            <AppointmentForm onAppointmentCreated={handleAppointmentCreated} />
            <AppointmentList appointments={appointments} />
          </div>
        </main>
      </div>
    </Container>
  );
}