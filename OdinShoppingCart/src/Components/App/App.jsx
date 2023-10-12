import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ShopPage from "../ShopPage/ShopPage";
import HomePage from "../HomePage/HomePage";
import CartPage from "../CartPage/CartPage";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      price: 200,
      title: "Bloom or Boom",
      quantity: 0,
    },
    {
      id: 2,
      price: 199,
      title: "Calculated LP",
      quantity: 0,
    },
    {
      id: 3,
      price: 300,
      title: "HOW EP",
      quantity: 0,
    },
    {
      id: 4,
      price: 2000,
      title: "VVI EP",
      quantity: 0,
    },
    {
      id: 5,
      price: 2300,
      title: "midEverything EP",
      quantity: 0,
    },
    {
      id: 6,
      price: 200,
      title: "Trust In Rimbo EP",
      quantity: 0,
    },
  ]);

  const handleCart = (index, itemCount) => {
    let itemIndex = cart.findIndex(item => {
      return item.id === index;
    });
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity += itemCount;

    setCart(updatedCart);
  };

  const handleClear = () => {
    let clearCart = cart.map(item => ({ ...item, quantity: 0 }));
    setCart(clearCart);
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage handleCart={handleCart} />} />{" "}
          <Route
            path="/cart"
            element={
              <CartPage
                handleCart={handleCart}
                cart={cart}
                handleClear={handleClear}
              />
            }
          />{" "}
          <Route path="/shop" element={<ShopPage handleCart={handleCart} />} />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
