import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ShopPage from "../ShopPage/ShopPage";
import HomePage from "../HomePage/HomePage";
import CartPage from "../CartPage/CartPage";

function App() {
  const [cart, setCart] = useState([
    { id: 1, quantity: 0 },
    { id: 2, quantity: 0 },
    { id: 3, quantity: 0 },
    { id: 4, quantity: 0 },
    { id: 5, quantity: 0 },
    { id: 6, quantity: 0 },
  ]);

  const handleCart = (index, itemCount) => {
    let itemIndex = cart.findIndex(item => {
      return item.id === index;
    });
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity += itemCount;

    setCart(updatedCart);
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <NavBar cart={cart} />
        <Routes>
          <Route path="/home" element={<HomePage handleCart={handleCart} />} />{" "}
          <Route path="/cart" element={<CartPage handleCart={handleCart} />} />{" "}
          <Route path="/shop" element={<ShopPage handleCart={handleCart} />} />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
