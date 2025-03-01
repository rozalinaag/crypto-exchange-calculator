'use client';
import { useState } from 'react';
import css from './styles.module.css';

const Dropdown = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className={css.wrapper}>
      <label htmlFor="dropdown">Валюта:</label>
      <select
        id="dropdown"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Валюта:</option>
        <option value="1">Вариант 1</option>
        <option value="2">Вариант 2</option>
        <option value="3">Вариант 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
