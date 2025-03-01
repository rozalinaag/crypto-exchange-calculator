import FreeQuery from '@/components/FreeQuery';
import styles from './page.module.css';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function Home() {
  return (
    <div className={styles.page}>
      Calculator
      <div className="flex">
        <div>
          <div>Введите количесво</div>
          <input /> <button>{`Рассчитать`}</button>
        </div>

        <Dropdown />
      </div>
      <FreeQuery symbol={'BTC_USDT'} />
    </div>
  );
}
