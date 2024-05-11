import React from "react";
import styles from "./SearchBar.module.css";
import MicIcon from "@mui/icons-material/Mic";
function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="What can we help you with today?" />
      <MicIcon className={styles.micIcon} />
    </div>
  );
}

export default SearchBar;
