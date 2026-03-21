import styles from './styles.module.css';

interface DefaultButtonProps extends React.ComponentProps<'button'> {
  icon: React.ReactNode;
  color?: 'green' | 'red';
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  icon,
  color = 'green',
  ...props
}) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
};
