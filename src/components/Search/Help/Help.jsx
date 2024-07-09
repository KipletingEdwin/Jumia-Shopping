import React, { useState } from "react";
import styles from "./Help.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleQuestion,
  faChevronUp,
  faMessage
} from "@fortawesome/free-solid-svg-icons";

function Help() {
  const [isChevronUp, setIsChevronUp] = useState(false);
  const [isHelpChevronUp, setIsHelpChevronUp] = useState(false);

  const toggleHelpChevron = () => {
    setIsHelpChevronUp(!isHelpChevronUp);
  };

  return (
    <section className={styles.container}>
      <div className={styles.help} onClick={toggleHelpChevron}>
        <FontAwesomeIcon icon={faCircleQuestion} />
        <p> Help</p>
        <FontAwesomeIcon icon={isHelpChevronUp ? faChevronDown : faChevronUp} />
        {
            !isHelpChevronUp &&(
                <div className={styles.helpContainer}>
                    <div className={styles.item}><a href="#">Help Center</a></div>
                    <div className={styles.item}><a href="#">Place an order</a></div>
                    <div className={styles.item}><a href="#">Track Your Order</a></div>
                    <div className={styles.item}><a href="#">Order Cancellation</a></div>
                    <div className={styles.item}><a href="#">Returns & Refunds</a></div>
                    <div className={styles.item}><a href="#">Payment & Jumia Account</a></div>
                    <div className={styles.itemButton}><FontAwesomeIcon icon={faMessage} /> <a href="#">LIVE CHAT</a> </div>

                </div>
            )
        }
      </div>
    </section>
  );
}

export default Help;
