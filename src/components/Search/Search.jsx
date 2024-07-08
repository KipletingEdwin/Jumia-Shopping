import React, { useState } from "react";
import "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserLarge,
  faChevronDown,
  faCircleQuestion,
  faCartShopping,
  faChevronUp,
  faBagShopping,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import jumiaImage from "../../assets/navbar/jumiaBlack.jpeg";



function Search() {
  const [isChevronUp, setIsChevronUp] = useState(false);
  const [isHelpChevronUp, setIsHelpChevronUp] = useState(false);

  const toggleChevron = () => {
    setIsChevronUp(!isChevronUp);
  };

  const toggleHelpChevron = () => {
    setIsHelpChevronUp(!isHelpChevronUp);
  };

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
          <div className={styles.account} onClick={toggleChevron}>
            <FontAwesomeIcon
              icon={faUserLarge}
              className={styles.faUserLarge}
            />
            <p> Account </p>
            <FontAwesomeIcon icon={isChevronUp ? faChevronDown : faChevronUp    } />
            { !isChevronUp && (
              <div className={styles.accountAdditionalContent}>
                <div className={styles.signInButton}>
                  <button className={styles.signIn}>SIGN IN</button>
                </div>
                <div className={styles.accountLowerSection}> 
                  <div className={styles.myAccount}>
                  <FontAwesomeIcon
                      icon={faUserLarge}
                  />
                    <p>My Account</p>
                  </div>

                  <div className={styles.myAccount}> 
                  <FontAwesomeIcon icon={faBagShopping} />
                    <p>Orders</p>
                  </div>

                  <div className={styles.myAccount}> 
                  <FontAwesomeIcon icon={faHeart} />
                    <p>Saved Items</p>
                  </div>

                </div>
              </div>
            )
              
            }
          </div>

          <div className={styles.help} onClick={toggleHelpChevron}>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <p> Help</p>

            <FontAwesomeIcon
              icon={isHelpChevronUp ? faChevronDown : faChevronUp}
            />
          </div>

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
