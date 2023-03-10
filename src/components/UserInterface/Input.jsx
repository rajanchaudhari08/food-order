import styles from "./Input.module.css";
import React, { useRef } from "react";

const Input = React.forwardRef((properties, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={properties.input.id}>{properties.label}</label>
      <input ref={ref} {...properties.input} />
    </div>
  );
});

export default Input;
