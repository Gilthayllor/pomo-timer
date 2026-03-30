import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export const Countdown: React.FC = () => {
  const {
    state: { formattedSecondsRemaining },
  } = useTaskContext();

  return (
    <div className={styles.container}>
      {formattedSecondsRemaining || '00:00'}
    </div>
  );
};
