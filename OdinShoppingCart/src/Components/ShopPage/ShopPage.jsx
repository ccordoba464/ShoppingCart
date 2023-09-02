import styles from "./ShopPage.module.css";

function ShopPage() {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productCard}></div>
        <div className={styles.productCard}></div>
        <div className={styles.productCard}></div>
        <div className={styles.productCard}></div>
        <div className={styles.productCard}></div>
        <div className={styles.productCard}></div>
      </div>
    </>
  );
}

export default ShopPage;
