import React from 'react';
import styles from './InputRegister.module.css';

export default function InputRegister({ 
  label, 
  type = 'text', 
  id, 
  name, 
  placeholder, 
  required = false,
  value,
  onChange
}) {
  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
