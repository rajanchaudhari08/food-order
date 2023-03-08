import { Fragment, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../CartContext/cart-context";

const HeaderCartButton = (properties) => {
  const headerCartButtonContext = useContext(CartContext);
  const numberOfItemsInCart = headerCartButtonContext.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );
  return (
    <Fragment>
      <button className={styles.button} onClick={properties.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={styles.badge}>{numberOfItemsInCart}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
