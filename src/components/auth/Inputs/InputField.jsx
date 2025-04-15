import React from 'react';
import styles from './InputField.module.css';


export default function InputField({ 
  label, 
  type = 'text', 
  id, 
  name, 
  placeholder, 
  required = false,
  extraContent 
}) {
  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {extraContent}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}