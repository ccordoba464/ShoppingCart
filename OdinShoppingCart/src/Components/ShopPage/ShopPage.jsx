import styles from "./ShopPage.module.css";
import Item from "../Item/Item";
import { Products } from "../../Products";
import PropTypes from "prop-types";

function ShopPage(props) {
  return (
    <>
      <div className={styles.shopContainer}>
        <div className={styles.title}>Shop VG</div>
        <div className={styles.productContainer}>
          {Products.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              img={item.image}
              title={item.title}
              price={item.price}
              handleCart={props.handleCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

ShopPage.propTypes = {
  handleCart: PropTypes.func,
};

export default ShopPage;
