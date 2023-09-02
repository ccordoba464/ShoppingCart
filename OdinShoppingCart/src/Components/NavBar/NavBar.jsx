import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}>VG</div>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>Shop</li>
            <li className={styles.li}>Cart: {props.items}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

NavBar.propTypes = {
  items: PropTypes.number,
};

export default NavBar;
