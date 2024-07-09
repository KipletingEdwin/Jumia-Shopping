import React, { useState } from "react";
import "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import jumiaImage from "../../assets/navbar/jumiaBlack.jpeg";
import LowerSection from "../LowerSection/LowerSection";
import Help from "./Help/Help";

function Search() {


  return (
    <section className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.jumiaImage}>
          <img src={jumiaImage} alt="jumia" />
        </div>

        <div className={styles.search}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.faMagnifyingGlass}
          />
          <input
            type="text"
            placeholder="Search products,brands and categories"
            name="search"
          />
        </div>

        <div className={styles.lowerSearch}>
          <button className={styles.searchButton}>SEARCH</button>
          <LowerSection />
          <Help />

          <div className={styles.cart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
