import styles from "./App.module.css";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <>
      <div className={styles.pageContainer}>
        <NavBar />
      </div>
    </>
  );
}

export default App;
