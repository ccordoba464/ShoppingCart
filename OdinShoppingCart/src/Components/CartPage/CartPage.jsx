import styles from "./CartPage.module.css";
import PropTypes from "prop-types";

function ItemPane(props) {
  return (
    <>
      <div className={styles.itemsContainer}>
        <div className={styles.itemTitle}>{props.title}</div>
        <div className={styles.pricesContainer}>
          <div className={styles.itemPrice}>${props.price}</div>
          <div className={styles.totalPrice}>x {props.quantity}</div>
        </div>
      </div>
    </>
  );
}

function CartPage(props) {
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.cartDisplay}>
          <div className={styles.cartTitle}>Cart</div>
          {props.cart.map((item, index) => {
            return item.quantity >= 1 ? (
              <ItemPane
                key={index}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ) : null;
          })}
          <div className={styles.cartTotal}>
            Total: $
            {props.cart.reduce((totalQuantity, item) => {
              return totalQuantity + item.quantity * item.price;
            }, 0)}
          </div>
          <div className={styles.cartButtonContainer}>
            <button className={styles.cartButton}>Checkout</button>
            <button className={styles.cartButton} onClick={props.handleClear}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CartPage.propTypes = {
  total: PropTypes.number,
  cart: PropTypes.array,
  handleClear: PropTypes.func,
};

ItemPane.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartPage;
