import React from 'react';
import DrinksCart from '../Components/DrinksCart/DrinksCart';
import drinks from '../drinks.json'
import juice from '../juice.json'
import beer from '../beer.json'
const DrinksPage = () => {

    return (
        <div>
            {[drinks, juice, beer].map((arr) =>
                arr.map((item) =>
                    <div className='MAIN'>
                        <p>{item.text}</p>
                        <div className='cart-f'>
                            {item.drinks.map((i) => <DrinksCart {...i} />)}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DrinksPage;