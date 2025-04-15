import React from 'react';
import toolbar from './Toolbar.module.css';

export default function Toolbar({ items, onSelect }) {
  return (
    <nav className={toolbar.toolbar}>
      <ul>
        {items.map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
