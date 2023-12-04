import React from "react";
import Searchbar from "./Searchbar/Searchbar.js";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} container `}>
      <Searchbar />
    </header>
  );
}

export default Header;
