'use client';
import { useState } from 'react';
import css from './styles.module.css';

type Props = {
  text: string;
};

const Dropdown = ({ text }: Props) => {
  const [selected, setSelected] = useState('');

  return (
    <div className={css.wrapper}>
      <label htmlFor="dropdown">{text}:</label>
      <select
        id="dropdown"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">USDT</option>
        <option value="1">BTC</option>
        <option value="2">ETH</option>
      </select>
    </div>
  );
};

export default Dropdown;
