import styles from "./Cart.module.css";
import Modal from "../UserInterface/Modal";
import { useContext } from "react";
import CartContext from "../../../CartContext/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";

const Cart = (properties) => {
  const cartContext = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = (userData) => {
    fetch("https://food-order-67003-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartContext.items,
      }),
    });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={properties.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={properties.onClose}
        />
      )}
      {!isCheckout && (
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={properties.onClose}
          >
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
