import React, { useState } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function Header() {
  const [openCart, setOpenCart] = useState(false);
  const cartItems = useSelector((state) => state);

  const handleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left__side}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.logo}>Zstore</div>
        </Link>
        <div className={styles.newest}>Categories</div>
        <div className={styles.categories}>Newest Arrival</div>
      </div>
      <SearchBar />
      <div className={styles.right__side}>
        <SearchIcon className={styles.rightSide__icons} />
        <FavoriteIcon className={styles.rightSide__icons} />
        <PersonIcon className={styles.rightSide__icons} />
        <div className={styles.cart} onClick={handleCart}>
          cart(
          {cartItems?.cartItems.length > 0 ? cartItems.cartItems.length : 0})
        </div>
      </div>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </div>
  );
}

export default Header;
