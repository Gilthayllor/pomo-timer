import styles from './Heading.module.css';

interface HeadingProps {
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
