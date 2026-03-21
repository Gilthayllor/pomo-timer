import { LuHistory, LuHouse, LuSettings, LuSun } from 'react-icons/lu';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <LuHouse />
      </a>

      <a className={styles.menuLink} href='#'>
        <LuHistory />
      </a>

      <a className={styles.menuLink} href='#'>
        <LuSettings />
      </a>

      <a className={styles.menuLink} href='#'>
        <LuSun />
      </a>
    </nav>
  );
}
