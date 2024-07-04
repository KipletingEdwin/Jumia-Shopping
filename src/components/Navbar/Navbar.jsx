import React from 'react'
import styles from './Navbar.module.css'
import deliveryImage from '../../assets/navbar/freedelivery.gif'
import jumiaIcon from '../../assets/navbar/jumia.png'

function Navbar() {
  return (
    <section className={styles.container} >

      <div className={styles.delivery}>
        <img src={deliveryImage} alt="delivery" className="delivery-image" />
      </div>

      <div className={styles.sell}>
        <div className={styles.sellSection}>
          <img src={jumiaIcon} alt="jumiaIcon" className="sellIcon" />

        </div>

      </div>

    </section>
  )
}

export default Navbar