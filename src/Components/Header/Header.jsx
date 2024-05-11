import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left__side}>
        <div className={styles.logo}>ZStore</div>
        <div className={styles.newest}>Categories</div>
        <div className={styles.categories}>Newest Arrival</div>
      </div>
      <SearchBar />
      <div className={styles.right__side}>
        <SearchIcon className={styles.rightSide__icons} />
        <FavoriteIcon className={styles.rightSide__icons} />
        <PersonIcon className={styles.rightSide__icons} />
        <div className={styles.cart}>cart(0)</div>
      </div>
    </div>
  );
}

export default Header;
