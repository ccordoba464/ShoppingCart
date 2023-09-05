import styles from "./ShopPage.module.css";
import Item from "../Item/Item";
import { Products } from "../../Products";

function ShopPage() {
  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.title}>Shop Music</div>
        <div className={styles.productContainer}>
          {Products.map((item, index) => (
            <Item
              key={index}
              img={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopPage;
