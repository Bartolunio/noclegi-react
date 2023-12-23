import React from "react";
import Searchbar from "./Searchbar/Searchbar.js";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={`${styles.header} container `}>
      <Searchbar onSearch={props.onSearch} />
    </header>
  );
}

export default Header;
