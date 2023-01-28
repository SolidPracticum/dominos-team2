import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom';
import logo from './img/Domino.svg'
import scss from './HeaderPromotion.module.scss'
const HeaderPromotion = () => {
    const [clicked, isClicked] = useState('')
    const handleClicked = () => {
        isClicked(!clicked);
      }
    return (
        <div className={scss.header}>
            <div className="container">
                <div className={scss.column}>
                    <div className={scss.header_top}>
                        <img src={logo} alt="logo" width={90} />
                        <h1>Dominos`s Pizza</h1>
                    </div>
                    <div className={scss.form}>
                        <form action="">
                            <select name="" id="">
                                <option value="uah">Укр</option>
                                <option value="en">Eng</option>
                            </select>
                        </form>
                        <form action="">
                            <select name="" id="">
                                <option>Kиiiв</option>
                                <option>Бровари</option>
                            </select>
                        </form>
                    </div>
                    <div className={scss.form_center}>
                        <p>0.00грн</p>
                        <button>Замовити</button>
                    </div>
                    <div className={scss.form_bottom}>
                        <Link>Увiйти</Link>
                       <div className={scss.burger}>
                       {!clicked ?
            (< GiHamburgerMenu className={scss.icon}  onClick={handleClicked} />
            ) : (
              <ImCross className={scss.icon} onClick={handleClicked} />
            )}
                       </div>
                    </div>
                </div>
            </div>
            <div className={scss.column_bottom}>
                <div className={scss.header_center}>
                    <Link to='/Promo'>Акцii</Link>
                    <Link to='/Pizza'>Пiца</Link>
                    <Link to='/Drinks'>Напої</Link>
                    <Link to='/Sides'>Сайди</Link>
                    <Link to='/Desserts'>Десерти</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderPromotion;