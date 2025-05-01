import styles from './WorkDaysSelector.module.css';

const daysOfWeek = [
  'SEGUNDA',
  'TERÇA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SÁBADO',
  'DOMINGO'
];

export default function WorkDaysSelector({ selectedDays, onChange }) {
  function toggleDay(day) {
    if (selectedDays.includes(day)) {
      onChange(selectedDays.filter(d => d !== day));
    } else {
      onChange([...selectedDays, day]);
    }
  }

  return (
    <div className={styles.selector}>
      {daysOfWeek.map(day => (
        <label key={day} className={styles.label}>
          <input
            type="checkbox"
            checked={selectedDays.includes(day)}
            onChange={() => toggleDay(day)}
            className={styles.checkbox}
          />
          {day}
        </label>
      ))}
    </div>
  );
}
