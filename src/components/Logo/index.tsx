import { LuTimer } from 'react-icons/lu';
import styles from './styles.module.css';

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <LuTimer />
        <span>Pomo Timer</span>
      </a>
    </div>
  );
};
