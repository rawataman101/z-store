import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import MicIcon from "@mui/icons-material/Mic";
function SearchBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="What can we help you with today?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <MicIcon className={styles.micIcon} />

      {searchText && <div className={styles.searchDiv}>item not found.</div>}
    </div>
  );
}

export default SearchBar;
