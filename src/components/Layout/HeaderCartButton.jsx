import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (properties) => {
  return (
    <Fragment>
      <button className={styles.button} onClick={properties.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={styles.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
