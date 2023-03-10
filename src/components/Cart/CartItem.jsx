import styles from "./CartItem.module.css";

const CartItem = (properties) => {
  const price = `$${properties.price.toFixed(2)}`;
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{properties.name}</h2>
        <div className={styles.description}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {properties.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={properties.onRemove}>−</button>
        <button onClick={properties.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
