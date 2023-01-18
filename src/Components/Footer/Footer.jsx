import React from 'react'
import styles from "./Footer.module.scss"
import comment from "../../assests/comment.png"
import facebook from "../../assests/facebook.png"
import pizza from "../../assests/pizza.png"
import instagram from "../../assests/instagram.png"
import telegram from "../../assests/telegram.png"
import youtube from "../../assests/youtube.png"
import googlePlay from "../../assests/googlePlay.png"
import appStore from "../../assests/appStore.png"
import visa from "../../assests/visa.png"
import masterCard from "../../assests/masterCard.png"
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.first}>
                    <div className={styles.title}>
                        <span>Domino's Pizza</span>
                    </div>
                    <a href="https://dominos.ua/uk/kyiv/Pizza/">Menu</a>
                    <a href="https://dominos.ua/uk/kyiv/where_to_buy/">Pizzerias</a>
                    <a href="https://biz.dominos.ua/">Franchising</a>
                    <a href="https://media.dominos.ua/allergens_info/allergenyukr.pdf">Information about the content of<br />
                        allergens and nutritional value</a>
                    <a href="https://fitel.io/">Food safety policy</a>
                </div>
                <div className={styles.second}>
                    <div className={styles.title}>
                        <span>Services</span>
                    </div>
                  
                        <img className={styles.tracker} width={25} src={comment} alt="comment" />
                        <a href="https://dominos.ua/en/kyiv/tracker/">Pizza Tracker</a>
                </div>
                <div className={styles.third}>
                    <div className={styles.title}>
                        <span>Contacts</span>
                    </div>
                    <div>
                        <a href="https://dominos.ua/en/kyiv/">info@dominos.ua</a>
                    </div>
                    <div>
                        <a href="https://dominos.ua/en/kyiv/feedback/">Send complaint</a>
                    </div>
                    <div className={styles.phoneNumber}>
                    0442 222 1111
                    </div>
                </div>

                <div className={styles.fourth}>
                    <div className={styles.titleDomino}>
                        <img src={pizza} alt="domino" />
                        <a href="https://dominos.ua/en/kyiv/">Domino's Pizza</a>
                        </div>
                        <div class={styles.text}>© 2023 Domino's Pizza Ukraine</div>   
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.one}>
                    <div className={styles.site}>
                        <a href="https://fitel.io/">SITE DEVELOPED BY FITEL.IO</a>
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.application}>DOWNLOAD APPLICATION</div>
                    <div className={styles.icons}>
                        <a href="https://apps.apple.com/ua/app/dominos-pizza-ukraine/id744229913?ign-mpt=uo%3D4">
                            <img src={appStore} alt="appStore" /> </a>
                   <a href="https://play.google.com/store/apps/details?id=ua.com.coxo.dominos">
                    <img src={googlePlay} alt="googlePlay" /></a>
                 
                    </div>
                   
                </div>
                <div className={styles.three}>
                    <div className={styles.payments}>SUPPORTED PAYMENTS</div>
                    <img className={styles.visa} width={55} src={visa} alt="visa" />
                    <img width={85} src={masterCard} alt="masterCard" />

                </div>
                <div className={styles.follow}>
                    <div className={styles.social}>FOLLOW</div>
                    <a className={styles.facebook} href="https://www.facebook.com/DominosPizzaUkraine/"> <img width={13} src={facebook} alt="facebook" /> </a>
                    <a href="https://www.youtube.com/dominospizzaua"> <img width={25} src={youtube} alt="youtube" /> </a>

                    <a href="https://www.instagram.com/dominos_ua/"><img width={35} src={instagram} alt="instagram" /></a>

                    <a href="https://t.me/dominosukraine"> <img width={28} src={telegram} alt="telegram" /></a>
                </div>
            </div>
        </div >
    )
}

export default Footer;