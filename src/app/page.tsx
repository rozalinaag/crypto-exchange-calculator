import FreeQuery from '@/components/FreeQuery';
import css from './page.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function Home() {
  return (
    <div className={css.page}>
      <div className={css.content}>
        <div className={css.title}>Калькулятор обмена криптовалюты</div>

        <div>
          <div className={css.wrapper}>
            <div>
              <div>Введите количество</div>
              <input />
            </div>

            <Dropdown text="Ваша валюта" />
            <Dropdown text="Перевезти в" />
          </div>
          <div className={css.error}>{`Минимальная сумма обмена: ${1000}`}</div>
          <button className={css.button}>{`Рассчитать`}</button>
        </div>
      </div>
      <FreeQuery symbol={'BTC_USDT'} />
    </div>
  );
}
