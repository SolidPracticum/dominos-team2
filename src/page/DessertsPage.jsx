import React from 'react';
import DessertCart from '../component/DessertCart/DessertCart';
import Header from '../component/Header/Header';
import dessert from './../component/Array/desserts.json'
import scss from './Pages.module.scss'
const DessertsPage = () => {
    console.log(dessert);
    const desert = [dessert]
    return (
        <div>
            <Header />
            <div className={scss.content}>
                {desert.map((arr) =>
                    arr.map((item) =>
                        <div className={scss.main_grid}>
                            <p className={scss.text}>{item.text}</p>
                            <div className={scss.cart_f}>
                                {item.desserts.map((i) => <DessertCart {...i} />)}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DessertsPage;