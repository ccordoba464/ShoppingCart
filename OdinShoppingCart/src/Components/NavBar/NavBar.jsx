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
            <li className={styles.li}>Cart: {props.itemCount}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

NavBar.propTypes = {
  itemCount: PropTypes.number,
};

export default NavBar;
