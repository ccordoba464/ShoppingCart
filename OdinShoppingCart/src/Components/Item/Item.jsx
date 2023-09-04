import styles from "./Item.module.css";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.imgContainer}>
          <img src={props.img} alt="Cover" className={styles.itemImage} />
        </div>
        <div className={styles.itemName}>{props.title}</div>
        <div className={styles.itemPrice}>{props.price}</div>
        <div className={styles.buttonContainer}>
          <button className={styles.changeAmt}>{"<"}</button>
          <input type="text" className={styles.input} placeholder="0" />
          <button className={styles.changeAmt}>{">"}</button>
          <button className={styles.addCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Item;
