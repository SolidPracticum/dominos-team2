import React from 'react';
import drinks from '../drinks.json'
import juice from '../juice.json'
import beer from '../beer.json'
import './Pages.scss'
import DrinksCart from '../component/DrinksCart/DrinksCart';
import Header from '../component/Header/Header';
const DrinksPage = () => {
     const category = [drinks, juice, beer]
    return (
        <div>
            <Header/>
            {category.map((arr) =>
                arr.map((item) =>
                    <div className='MAIN'>
                        <p className='text'>{item.text}</p>
                        <div className='cart-f'>
                            {item.drinks.map((i) => <DrinksCart {...i} />)}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DrinksPage;