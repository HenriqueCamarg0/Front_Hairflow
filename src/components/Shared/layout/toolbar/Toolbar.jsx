import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaUserFriends, FaConciergeBell } from 'react-icons/fa';
import Styles from './Toolbar.module.css';

export default function Toolbar({ items, onSelect, activeSection }) {
  const icons = {
    Dashboard: <FaTachometerAlt />,
    Agenda: <FaCalendarAlt />,
    Funcionários: <FaUserFriends />,
    Serviços: <FaConciergeBell />,
  };

  return (
    <nav className={Styles.toolbar}>
      <ul className={Styles.navList}>
        {items.map((item) => (
          <li
            key={item}
            className={`${Styles.navItem} ${activeSection === item ? Styles.active : ''}`}
            onClick={() => onSelect(item)}
          >
            <div className={Styles.iconWrapper}>{icons[item]}</div> {/* Exibe o ícone correspondente */}
            <span className={Styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
