import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}>VG</div>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="home" className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              {" "}
              <Link to="shop" className={styles.link}>
                Shop
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="cart" className={styles.link}>
                Cart:{" "}
                {props.cart.reduce((totalQuantity, item) => {
                  return totalQuantity + item.quantity;
                }, 0)}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

NavBar.propTypes = {
  cart: PropTypes.array,
};

export default NavBar;
