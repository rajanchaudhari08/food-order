import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/FunctionalDeployment/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "../CartContext/CartProvider";
const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
