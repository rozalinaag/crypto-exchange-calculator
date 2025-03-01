import FreeQuery from '@/components/FreeQuery';
import css from './page.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function Home() {
  return (
    <div className={css.page}>
      Calculator
      <div>
        <div className={css.wrapper}>
          <div>
            <div>Введите количесво</div>
            <input />
          </div>

          <Dropdown text="Ваша валюта" />
          <Dropdown text="Перевезти в" />
        </div>
        <button className={css.button}>{`Рассчитать`}</button>
      </div>
      <FreeQuery symbol={'BTC_USDT'} />
    </div>
  );
}
