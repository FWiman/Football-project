import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Logo</Link>
      </div>
      <ul className={styles.navLinks}></ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
