import { useState } from "react";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

function Item(props) {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement = () => {
    setItemCount(itemCount - 1);
  };

  const handleInputChange = e => {
    setItemCount(+e.target.value);
  };

  const handleAdd = () => {
    props.handleCart(props.id, itemCount);
  };

  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.imgContainer}>
          <img src={props.img} alt="Cover" className={styles.itemImage} />
        </div>
        <div className={styles.itemName}>{props.title}</div>
        <div className={styles.itemPrice}>${props.price}</div>
        <div className={styles.buttonContainer}>
          <button className={styles.changeAmt} onClick={handleDecrement}>
            {"<"}
          </button>
          <input
            type="text"
            className={styles.input}
            value={itemCount}
            onChange={handleInputChange}
          />
          <button className={styles.changeAmt} onClick={handleIncrement}>
            {">"}
          </button>
          <button className={styles.addCart} onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {
  handleCart: PropTypes.func,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default Item;
