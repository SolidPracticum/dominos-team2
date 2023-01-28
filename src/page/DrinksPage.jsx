import React from 'react';
import drinks from '../component/Array/drinks.json'
import juice from '../component/Array/juice.json'
import beer from '../component/Array/beer.json'
import DrinksCart from '../component/DrinksCart/DrinksCart';
import Header from '../component/Header/Header';
import scss from './Pages.module.scss'
const DrinksPage = () => {
    const category = [drinks, juice, beer]
    return (
        <div>
            <Header />
            <div className={scss.content}>
                {category.map((arr) =>
                    arr.map((item) =>
                        <div className={scss.main_grid}>
                            <p className={scss.text}>{item.text}</p>
                            <div className={scss.cart_f}>
                                {item.drinks.map((i) => <DrinksCart {...i} />)}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default DrinksPage;