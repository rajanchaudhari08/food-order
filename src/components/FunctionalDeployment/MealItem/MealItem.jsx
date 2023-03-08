import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (properties) => {
  const price = `$${properties.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{properties.name}</h3>
        <div className={styles.description}>{properties.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
