import styles from "../CartPage/CartPage.module.css";
import PropTypes from "prop-types";

function CartPage(props) {
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.cartDisplay}>
          <div className={styles.cartTitle}>Cart</div>
          <div className={styles.itemsContainer}>
            <div className={styles.itemTitle}>Album Cover</div>
            <div className={styles.pricesContainer}>
              <div className={styles.itemPrice}>$200</div>
              <div className={styles.totalPrice}>$400</div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.changeAmt}>{"<"}</button>
              <input type="text" className={styles.input} placeholder="0" />
              <button className={styles.changeAmt}>{">"}</button>
              <button className={styles.addCart}>Add to Cart</button>
            </div>
          </div>
          <div className={styles.cartTotal}>Total: $400{props.total}</div>
          <div className={styles.cartButtonContainer}>
            <button className={styles.cartButton}>Checkout</button>
            <button className={styles.cartButton}>Clear Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

CartPage.propTypes = {
  total: PropTypes.number,
};

export default CartPage;
