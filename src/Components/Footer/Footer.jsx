import React from 'react'
import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.top}>
          <div className={styles.first}>
                <div className={styles.title}>
                    <span>Dominos Pizza</span>
                   <h4>hjhjjjj</h4>
                </div>
                </div>
                <div className={styles.second}>
                <div className={styles.title}>
                    <span>Dominos Pizza</span>
                   <h4>hjhjjjj</h4>
                </div>
                </div>
                <div className={styles.third}>
                <div className={styles.title}>
                    <span>Dominos Pizza</span>
                   <h4>hjhjjjj</h4>
                </div>
                </div>
                <div className={styles.fourth}>
                <div className={styles.title}>
                    <span>Dominos Pizza</span>
                   <h4>hjhjjjj</h4>
                </div>
                </div>
          </div>
          
            <div className={styles.bottom}>
                <div className={styles.one}>
                <span>SITE DEVELOPED BY </span>
                </div>
                <div className={styles.one}>
                <span>SITE DEVELOPED BY </span>
                </div>
                <div className={styles.one}>
                <span>SITE DEVELOPED BY </span>
                </div>
                <div className={styles.one}>
                <span>SITE DEVELOPED BY </span>
                </div>

            </div>
            
           


        </div>
    )
}

export default Footer;