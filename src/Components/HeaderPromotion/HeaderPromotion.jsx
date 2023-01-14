import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Domino.svg'
import burger from './burgerblack.png'
import scss from './HeaderPromotion.module.scss'
const HeaderPromotion = () => {
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
                        <img src={burger} alt="menu" />
                    </div>
                </div>
            </div>
            <div className={scss.column_bottom}>
                <div className={scss.header_center}>
                    <Link to='/promotions'>Акцii</Link>
                    <Link>Пiца</Link>
                    <Link>Напої</Link>
                    <Link>Сайди</Link>
                    <Link>Десерти</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderPromotion;