import styles from "./ShopPage.module.css";
import Bloom from "../../Images/BLOOMORBOOM.png";
import Calculated from "../../Images/CALCULATED.jpeg";
import HOW from "../../Images/HOW.jpg";
import VV1 from "../../Images/VV1.jpg";
import midEverything from "../../Images/midEVERYTHING.jpg";
import TIR from "../../Images/TrustInRimbo.jpg";

function ShopPage() {
  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.title}>Vowel Gang Shop</div>
        <div className={styles.productContainer}>
          <div className={styles.productCard}>
            <img src={Bloom} alt="Bloom or Boom" className={styles.itemImage} />
          </div>
          <div className={styles.productCard}>
            <img
              src={Calculated}
              alt="Calculated Cover"
              className={styles.itemImage}
            />
          </div>
          <div className={styles.productCard}>
            <img src={HOW} alt="HOW Cover" className={styles.itemImage} />
          </div>
          <div className={styles.productCard}>
            <img src={VV1} alt="VV1 Cover" className={styles.itemImage} />
          </div>
          <div className={styles.productCard}>
            <img
              src={midEverything}
              alt="midEverything Cover"
              className={styles.itemImage}
            />
          </div>
          <div className={styles.productCard}>
            {" "}
            <img
              src={TIR}
              alt="Trust In Rimbo Cover"
              className={styles.itemImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
