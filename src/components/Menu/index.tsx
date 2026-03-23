import { LuHistory, LuHouse, LuMoon, LuSettings, LuSun } from 'react-icons/lu';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

const mapThemeToIcon: Record<AvailableThemes, React.ReactNode> = {
  dark: <LuSun />,
  light: <LuMoon />,
};

export const Menu: React.FC = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes | null;
    return savedTheme || 'dark';
  });

  const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <LuHouse />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <LuHistory />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <LuSettings />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {mapThemeToIcon[theme]}
      </a>
    </nav>
  );
};
