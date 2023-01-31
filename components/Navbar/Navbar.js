import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "../Cart";
import { useStateContext } from "../../context/StateContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <div className={styles.navbarContainer}>
      <p className={styles.logo}>
        <Link href="/">Headphones R Us</Link>
      </p>
      <button
        type="button"
        className={styles.cartIcon}
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className={styles.cartIconQuantity}>{totalQuantity}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};
export default Navbar;
