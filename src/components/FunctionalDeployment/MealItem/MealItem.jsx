import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../../CartContext/cart-context";

const MealItem = (properties) => {
  const mealItemCartContext = useContext(CartContext);
  const price = `$${properties.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    mealItemCartContext.addItem({
      id: properties.id,
      name: properties.name,
      amount: amount,
      price: properties.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{properties.name}</h3>
        <div className={styles.description}>{properties.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
