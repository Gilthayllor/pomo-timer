import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro 🍅</a>
      <a href=''>Pomo Timer &copy; {new Date().getFullYear()} - Feito com ❤️</a>
    </footer>
  );
};
