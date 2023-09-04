import styles from "./ShopPage.module.css";
import Bloom from "../../Images/BLOOMORBOOM.png";
import Calculated from "../../Images/CALCULATED.jpeg";
import HOW from "../../Images/HOW.jpg";
import VV1 from "../../Images/VV1.jpg";
import midEverything from "../../Images/midEVERYTHING.jpg";
import TIR from "../../Images/TrustInRimbo.jpg";
import Item from "../Item/Item";

const price = 200;
const title = "Album Cover";

function ShopPage() {
  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.title}>Shop Music</div>
        <div className={styles.productContainer}>
          <Item img={Bloom} title={title} price={price} />
          <Item img={Calculated} title={title} price={price} />
          <Item img={HOW} title={title} price={price} />
          <Item img={VV1} title={title} price={price} />
          <Item img={midEverything} title={title} price={price} />
          <Item img={TIR} title={title} price={price} />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
