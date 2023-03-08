import styles from "./Input.module.css";

const Input = (properties) => {
  return (
    <div className={styles.input}>
      <label htmlFor={properties.input.id}>{properties.label}</label>
      <input {...properties.input} />
    </div>
  );
};

export default Input;
