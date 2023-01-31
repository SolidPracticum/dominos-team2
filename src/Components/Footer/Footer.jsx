import React, { useState } from 'react'
import {Link} from "react-router-dom"
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
import arrow from "../../assests/arrow.png"
const Footer = () => {
    const [isOpenDomino, setIsOpenDomino] = useState(true)
    const [isOpenServices, setIsOpenServices] = useState(true)
    const [isOpenContacts, setIsOpenContacts] = useState(true)
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.first}>
                       <div className={styles.title}>
                        <span>Domino's Pizza</span>
                        <button id={styles.first} onClick={() => setIsOpenDomino(!isOpenDomino)}>
                            <img className={`${styles.arrow} ${isOpenDomino ? styles.openDomino : ""}` } src={arrow} alt="arrow" />
                        </button>
                        </div>
                        {isOpenDomino && <div className={styles.firstColumn}>
                        
                        <Link to="/Menu"><li>Menu</li></Link>
                        <Link to="/Pizzerias"><li>Pizzerias</li></Link>
                        <Link to="/Franchising"><li>Franchising</li></Link>
                        <Link to="/Information about"><li>Informaton about the content of allergens and
                            nutritional value</li></Link>
                            <Link to="/Food safety"><li>Food safety Policy</li></Link>
                        </div>}
                    
                </div>

                <div className={styles.second}>
                    <div className={styles.title}>
                        <span>Services</span>
                       <button id={styles.second} onClick={() => setIsOpenServices(!isOpenServices)}>
                       <img className={`${styles.arrow} ${isOpenServices ? styles.openServices : ""}` } src={arrow} alt="arrow" />
                    </button>
                    </div>
                    {isOpenServices && <div className={styles.secondColumn}>
                        <img className={styles.tracker} width={25} src={comment} alt="comment" />
                        <Link to="/Pizza Tracker">Pizza tracker</Link>
                    </div>}
                    
                </div>

                <div className={styles.third}>
                    <div className={styles.title}>
                        <span>Contacts</span>
                        <button id={styles.third} onClick={() => setIsOpenContacts(!isOpenContacts)}>
                        <img className={`${styles.arrow} ${isOpenContacts ? styles.openContacts : ""}` } src={arrow} alt="arrow" />
                        </button>
                        </div>
                        {isOpenContacts && <div className={styles.thirdColumn}>

                            <div>
                            <Link to="/Info">info@dominos.ua</Link>
                            </div>
                            <div>
                            <Link to="/Complaint">Send complaint</Link>
                            </div>
                            <Link to="tel:+389442221111" className={styles.phoneNumber} target="self" itemProp="telephone" content="0442 222 1111">0442 222 11 11</Link>
                        </div>}
                    
                </div>

                <div className={styles.fourth}>
                    <div className={styles.titleDomino}>
                        <img className={styles.domino} src={pizza} alt="domino" />
                        <Link to="/Domino`s Pizza">Domino`s Pizza</Link>
                    </div>
                    <div class={styles.text}>© 2023 Domino's Pizza Ukraine</div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.one}>
                    <div className={styles.site}>
                        <Link to="https://fitel.io/">SITE DEVELOPED BY FITEL.IO</Link>
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.application}>DOWNLOAD APPLICATION</div>
                    <div className={styles.icons}>
                    <Link to="/AppStore">
                            <img className={styles.appStore} src={appStore} alt="appStore" /> 
                            </Link>
                       <Link to="/googlePlay">
                            <img className={styles.googlePlay} src={googlePlay} alt="googlePlay" /></Link>
                           </div>

                </div>
                <div className={styles.three}>
                    <div className={styles.payments}>SUPPORTED PAYMENTS</div>
                    <img className={styles.visa} src={visa} alt="visa" />
                    <img className={styles.masterCard} width={85} src={masterCard} alt="masterCard" />

                </div>
                <div className={styles.follow}>
                    <div className={styles.social}>FOLLOW</div>
                    <Link to="/facebook"> <img className={styles.facebook} width={13} src={facebook} alt="facebook" /></Link>
                    <Link to="/youtube"><img className={styles.youtube} width={25} src={youtube} alt="youtube" /> </Link>

                    <Link to="/instagram"><img className={styles.instagram} width={35} src={instagram} alt="instagram" /></Link>

                    <Link to="/telegram"> <img className={styles.telegram} width={28} src={telegram} alt="telegram" /></Link>
                </div>
            </div>
        </div >
    )
}

export default Footer;