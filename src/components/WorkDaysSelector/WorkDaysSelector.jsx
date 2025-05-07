import { useState } from 'react';
import styles from './WorkDaysSelector.module.css';

const daysOfWeek = [
  {
    id: 'SEGUNDA',
    text: 'SEGUNDA'
  },
  {
    id: 'TERCA',
    text: 'TERÇA'
  },
  {
    id: 'QUARTA',
    text: 'QUARTA'
  },
  {
    id: 'QUINTA',
    text: 'QUINTA'
  },
  {
    id: 'SEXTA',
    text: 'SEXTA'
  },
  {
    id: 'SABADO',
    text: 'SÁBADO'
  },
  {
    id: 'DOMINGO',
    text: 'DOMINGO'
  }
]

export default function WorkDaysSelector({ setWorkDays, workDays }) {
  const [selected, setSelected] = useState(workDays);

  function toggleDay(day) {
    const updated = selected.includes(day.id)
      ? selected.filter(d => d !== day)
      : [...selected, day.id];

    setSelected(updated);
    setWorkDays(updated);
  }

  return (
    <div className={styles.daysContainer}>
      {daysOfWeek.map(day => {
        const isSelected = selected.includes(day.id) && workDays.includes(day.id);
  
        return (
          <button
            type="button"
            key={day.id}
            className={`${styles.dayButton} ${isSelected ? styles.selected : ''}`}
            onClick={() => toggleDay(day)}
          >
            {day.text}
          </button>
        );
      })}
    </div>
  );
  }
