import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const reducerCart = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItems = state.items.concat(action.item);
    const updatedItemsTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (properties) => {
  const [cartState, dispatchCartAction] = useReducer(
    reducerCart,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM_TO_CART", item: item });
  };

  const removeItemfromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM_FROM_CART", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {properties.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
