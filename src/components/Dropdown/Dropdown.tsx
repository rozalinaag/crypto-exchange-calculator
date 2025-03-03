'use client';
import { useEffect, useState } from 'react';
import css from './styles.module.css';

type Props = {
  text: string;
};

const currencies = ['USDT', 'BTC', 'ETH'];

const Dropdown = ({ text }: Props) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchWithErrorHandling = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Ошибка запроса:', error);
        alert('Не удалось загрузить данные. Попробуйте позже.');
      }
    };

    fetchWithErrorHandling('api/fee');
  }, []);

  return (
    <div className={css.wrapper}>
      <label htmlFor="dropdown">{text}:</label>

      <select
        id="dropdown"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {currencies.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
