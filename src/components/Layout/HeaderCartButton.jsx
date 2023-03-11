import { Fragment, useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../CartContext/cart-context";

const HeaderCartButton = (properties) => {
  const headerCartButtonContext = useContext(CartContext);
  const [bumpCartButton, setBumpCartButton] = useState(false);
  const numberOfItemsInCart = headerCartButtonContext.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );
  const styleCartButton = `${styles.button} ${
    bumpCartButton ? styles.bump : ""
  }`;
  const { items } = headerCartButtonContext;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpCartButton(true);
    const timeoutBump = setTimeout(() => {
      setBumpCartButton(false);
    }, 300);
    return () => {
      clearTimeout(timeoutBump);
    };
  }, [items]);
  return (
    <Fragment>
      <button className={styleCartButton} onClick={properties.onClick}>
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
