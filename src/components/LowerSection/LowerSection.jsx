import React,{useState} from 'react'
import styles from './LowerSection.module.css'
import './LowerSection.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faMagnifyingGlass,
  faUserLarge,
  faChevronDown,
  // faCircleQuestion,
  // faCartShopping,
  faChevronUp,
  faBagShopping,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

function LowerSection() {

  const [isChevronUp, setIsChevronUp] = useState(false);
  // const [isHelpChevronUp, setIsHelpChevronUp] = useState(false);

  const toggleChevron = () => {
    setIsChevronUp(!isChevronUp);
  };

  // const toggleHelpChevron = () => {
  //   setIsHelpChevronUp(!isHelpChevronUp);
  // };



  return (

    <section>

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
        
    </section>
  )
}

export default LowerSection