import React, { useState } from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaUserFriends, FaConciergeBell } from 'react-icons/fa';
import Styles from './Toolbar.module.css';

export default function Toolbar({ items, onSelect, activeSection }) {
  // Estado para controlar se a barra lateral está expandida ou contraída
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);

  // Função para alternar o estado da barra lateral
  const toggleToolbar = () => {
    setIsToolbarExpanded((prevState) => !prevState);
  };

  // Mapeamento de ícones para as seções
  const icons = {
    Dashboard: <FaTachometerAlt />,
    Agenda: <FaCalendarAlt />,
    Funcionários: <FaUserFriends />,
    Serviços: <FaConciergeBell />,
  };

  return (
    <aside className={`${Styles.toolbar} ${isToolbarExpanded ? Styles.toolbarExpanded : Styles.toolbarCollapsed}`}>
      {/* Botão de alternância da barra lateral */}
      <button onClick={toggleToolbar} className={Styles.toggleButton}>
        {isToolbarExpanded ? '←' : '→'} {/* Direção da seta de alternância */}
      </button>

      {/* Navegação da barra lateral */}
      {isToolbarExpanded && (
        <nav>
          <ul className={Styles.navList}>
            {items.map((item) => (
              <li
                key={item}
                className={`${Styles.navItem} ${activeSection === item ? Styles.active : ''}`}
                onClick={() => onSelect(item)}
              >
                <div className={Styles.iconWrapper}>{icons[item]}</div>
                <span className={Styles.itemText}>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
}
