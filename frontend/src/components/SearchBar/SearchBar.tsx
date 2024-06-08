import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search for a team or player" />
    </div>
  );
};

export default SearchBar;
