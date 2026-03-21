import styles from './styles.module.css';

interface DefaultInputProps extends React.ComponentProps<'input'> {
  id: string;
  label?: string;
}

export const DefaultInput: React.FC<DefaultInputProps> = ({
  id,
  type,
  label,
  ...props
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
};
