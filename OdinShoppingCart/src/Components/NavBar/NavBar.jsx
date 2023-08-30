import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}>VG</div>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>Shop</li>
            <li className={styles.li}>Cart</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
