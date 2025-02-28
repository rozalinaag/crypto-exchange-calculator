import FreeQuery from '@/components/FreeQuery';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      Calculator
      <FreeQuery symbol={'BTC_USDT'} />
    </div>
  );
}
