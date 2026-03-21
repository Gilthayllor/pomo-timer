import { LuTimer } from 'react-icons/lu';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <LuTimer />
        <span>Pomo Timer</span>
      </a>
    </div>
  );
}
