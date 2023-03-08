import CartContext from "./cart-context";

const CartProvider = (properties) => {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {properties.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
