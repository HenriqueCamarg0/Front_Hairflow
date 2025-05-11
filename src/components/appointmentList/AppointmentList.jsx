import { Calendar, Clock, User, Phone } from 'lucide-react';
import styles from './AppointmentList.module.css';

export default function AppointmentList({ appointments = [] }) {
if (appointments.length === 0) {
return (
<div className={styles.emptyListContainer}>
<h2 className={styles.sectionTitle}>
<Calendar className={styles.iconMargin} size={20} />
Agendamentos
</h2>
<p className={styles.emptyMessage}>Nenhum agendamento registrado ainda.</p>
</div>
);
}

return (
<div className={styles.appointmentListCard}>
<h2 className={styles.sectionTitle}>
<Calendar className={styles.iconMargin} size={20} />
Agendamentos
</h2>

<div className={styles.appointmentList}>
{appointments.map((appointment) => (
<div key={appointment.id} className={styles.appointmentItem}>
<div className={styles.appointmentHeader}>
<div className={styles.appointmentDate}>
  <Calendar size={16} className={styles.iconMarginSmall} />
  <span>{appointment.date}</span>
</div>
<div className={styles.appointmentTime}>
  <Clock size={16} className={styles.iconMarginSmall} />
  <span>{appointment.time}</span>
</div>
</div>

<div className={styles.appointmentBody}>
<div className={styles.appointmentDetail}>
  <User size={16} className={styles.iconMarginSmall} />
  <span className={styles.detailLabel}>Nome: </span> {appointment.name}
</div>
<div className={styles.appointmentDetail}>
  <User size={16} className={styles.iconMarginSmall} />
  <span className={styles.detailLabel}>Profissional: </span> {appointment.profissional}
</div>
<div className={styles.appointmentDetail}>
  <Phone size={16} className={styles.iconMarginSmall} />
  <span className={styles.detailLabel}>Telefone: </span> {appointment.phone}
</div>
</div>

{appointment.description && (
<div className={styles.appointmentDescription}>
  <span className={styles.detailLabel}>Descrição:</span> {appointment.description}
</div>
)}
</div>
))}
</div>
</div>
);
}