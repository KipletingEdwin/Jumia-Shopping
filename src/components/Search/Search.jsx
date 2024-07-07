import React from "react";
import './Search.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserLarge, faChevronDown, faCircleQuestion, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import jumiaImage from "../../assets/navbar/jumiaBlack.jpeg";






function Search() {
  return (
    <section className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.jumiaImage}>
          <img src={jumiaImage} alt="jumia" />
        </div>

        <div className={styles.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search products,brands and categories"
            name="search"
          />
        </div>
        <div className={styles.lowerSearch}>
          <button>SEARCH</button>
          <div className={styles.account}>
          <FontAwesomeIcon icon={faUserLarge} />
          Account 
          <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className={styles.help}>
          <FontAwesomeIcon icon={faCircleQuestion} />
          Help
          <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className={styles.cart}>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart

          </div>

        </div>
      </div>
    </section>
  );
}

export default Search;
