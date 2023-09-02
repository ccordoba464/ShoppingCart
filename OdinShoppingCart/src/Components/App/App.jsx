import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import ShopPage from "../ShopPage/ShopPage";

function App() {
  return (
    <>
      <div className={styles.pageContainer}>
        <NavBar />
        <ShopPage />
      </div>
    </>
  );
}

export default App;
