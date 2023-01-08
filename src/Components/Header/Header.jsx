import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Domino.svg'
import burger from './burgerblack.png'
import './Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className='column'>
                    <div className='header_top'>
                        <img src={logo} alt="logo" width={90} />
                        <h1>Dominos`s Pizza</h1>
                    </div>
                    <div className='form'>
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
                    <div className='form_center'>
                        <p>0.00грн</p>
                        <button>Замовити</button>
                    </div>
                    <div className='form_bottom'>
                        <Link>Увiйти</Link>
                        <img src={burger} alt="menu" />
                    </div>
                </div>
            </div>
            <div className='column_bottom'>
                <div className='header_center'>
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

export default Header;