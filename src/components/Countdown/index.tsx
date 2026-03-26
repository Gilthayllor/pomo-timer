import styles from './styles.module.css';

interface CountdownProps {
  formatterdSecondsRemaining?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  formatterdSecondsRemaining,
}) => {
  return (
    <div className={styles.container}>
      {formatterdSecondsRemaining || '00:00'}
    </div>
  );
};
