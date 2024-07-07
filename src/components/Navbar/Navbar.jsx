import React from "react";
import styles from "./Navbar.module.css";
import deliveryImage from "../../assets/navbar/freedelivery.gif";
import jumiaIcon from "../../assets/navbar/jumia.png";
import jumiaBlack from "../../assets/navbar/jumiaBlack.jpeg";

function Navbar() {
  return (
    <section className={styles.container}>

      <div className={styles.upperSection}>
        <div className={styles.delivery}>
          <img src={deliveryImage} alt="delivery" className="delivery-image" />
        </div>
      </div>

      <div className={styles.sell}>
        <div className={styles.sellSection}>
          <img src={jumiaIcon} alt="jumiaIcon" className="sellIcon" />
          <a href="#">Sell on Jumia</a>
        </div>

        <div className={styles.jumia}>
          <img src={jumiaBlack} alt="jumia" />
        </div>
        
      </div>

    </section>
  );
}

export default Navbar;
