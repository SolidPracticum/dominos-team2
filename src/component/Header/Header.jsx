import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import phone from "../../assests/phone.png"
import shopping from "../../assests/shopping.png"
import pizza from "../../assests/pizza.png"
import placeholder from "../../assests/placeholder.png"

function Header({ clicked, isClicked }) {
  const handleClicked = () => {
    isClicked(!clicked);
  }


  return (
    <div className={styles.wrapper}>

      <div className={styles.top}>
        
        <div className={styles.lng_auth}>

          <Link to="/Contacts" className={styles.contact}>
            <img src={phone} alt="phone" />
            <h3 viewBox="0 0 16 24" className={styles.phone}>0442 222 11 11</h3>
          </Link>

          <div className={styles.city}>
            <img src={placeholder} alt="" />
            <h3 className={styles.kiev}>Kiev</h3>
            </div>
        </div>
        <div className={styles.lng_auth}>
          <select className={styles.ln}>
            <option value="English">English</option>
            <option value="English">Русский</option>
          
          </select>
          <div className={styles.login}>
            <Link to="/Login">
              <h4>Sign Up</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
       <div>
      
       <Link to="/" className={styles.pizza}>
       <img  src={pizza} alt="Domino`s Pizza" />
          <h3 className={styles.domino}>Domino's Pizza</h3> 
          
        </Link>
       
       </div>
       


        <Link to="/Promo">
          <li className={styles.navElements}>Promo</li>
        </Link>

        <Link to="/Pizza">
          <li className={styles.navElements}>Pizza</li>
        </Link>

        <Link to="/Drinks">
          <li className={styles.navElements}>Drinks</li>
        </Link>

        <Link to="/Sides">
          <li className={styles.navElements}>Sides</li>
        </Link>

        <Link to="/Desserts">
          <li className={styles.navElements}>Desserts</li>
        </Link>

        <div className={styles.checkoutWrapper}>
         <div className={styles.basketWrapper}>
          <h4>00</h4>
          <div className={styles.basket}>
          <img src={shopping} alt="" />
          </div>
       
         </div>
          <div className={styles.checkout}>
          <h3>Checkout</h3>
            <Link to="/Checkout">
            
              
            </Link>
          </div>
        </div>

        <div className={styles.menu}>
          {!clicked ?
            (< GiHamburgerMenu className={styles.icon} onClick={handleClicked} />
            ) : (
              <ImCross className={styles.icon} onClick={handleClicked} />
            )
            }
        </div>


      </div>

    </div>
  )
}
export default Header
