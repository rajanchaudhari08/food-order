import styles from "./Card.module.css";

const Card = (properties) => {
  return <div className={styles.card}>{properties.children}</div>;
};

export default Card;
