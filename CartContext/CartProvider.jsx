import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const reducerCart = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItemsTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItemsAmount;

    if (existingCartItem) {
      const updatedItemAmount = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemsAmount = [...state.items];
      updatedItemsAmount[existingCartItemIndex] = updatedItemAmount;
    } else {
      updatedItemsAmount = state.items.concat(action.item);
    }
    // console.log({ updatedItemsAmount });
    return {
      items: updatedItemsAmount,
      totalAmount: updatedItemsTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItemsTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItemsAmount;
    if (existingCartItem.amount === 1) {
      updatedItemsAmount = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItemAmount = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItemsAmount = [...state.items];
      updatedItemsAmount[existingCartItemIndex] = updatedItemAmount;
    }
    // console.log({ updatedItemsAmount });
    return {
      items: updatedItemsAmount,
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
