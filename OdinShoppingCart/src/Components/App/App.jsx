import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className={styles.pageContainer}>
        <NavBar itemCount={itemCount} />
        <Outlet setItemCount={setItemCount} />
      </div>
    </>
  );
}

export default App;
