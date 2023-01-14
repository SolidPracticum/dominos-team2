import React from 'react';
import DrinksCart from '../components/DrinksCart/DrinksCart';
import drinks from '../drinks.json'
import juice from '../juice.json'
import beer from '../beer.json'
import './Pages.scss'
const DrinksPage = () => {
     const category = [drinks, juice, beer]
    return (
        <div>
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