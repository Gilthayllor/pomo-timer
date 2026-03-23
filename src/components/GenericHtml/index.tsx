import styles from './styles.module.css';

interface GenericHtmlProps {
  children: React.ReactNode;
}

export const GenericHtml: React.FC<GenericHtmlProps> = ({ children }) => {
  return <div className={styles.genericHtml}>{children}</div>;
};
