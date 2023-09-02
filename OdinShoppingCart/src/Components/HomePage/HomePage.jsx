import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.title}>VG Shop</div>
        <p className={styles.description}>
          One-stop shop for VG Music and Memorabilia.
          <br />
          Brought to you by VG.
        </p>
      </div>
    </>
  );
}

export default HomePage;
