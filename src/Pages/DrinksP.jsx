import React from 'react';
import DrinksCart from '../Components/DrinksPage/DrinksCart';
import drinks from './../drinks.json'
import juice from './../juice.json'
import beer from './../beer.json'
const DrinksP = () => {

    return (
        <div>
            {drinks.map((item) => 
            <div className='MAIN'>
                {drinks.map((item2) => <p>{item2.text}</p>)}
                <div  className='cart-f'>
                {item.drinks.map((i) => <DrinksCart {...i} />)}
                </div>
            </div>
            )}
            
            {juice.map((item) => 
            <div className='MAIN'>
                {juice.map((item2) => <p>{item2.text}</p>)}
                <div  className='cart-f'>
                {item.drinks.map((i) => <DrinksCart {...i} />)}
                </div>
            </div>
            )}
             {beer.map((item) => 
            <div className='MAIN'>
                {beer.map((item2) => <p>{item2.text}</p>)}
                <div  className='cart-f'>
                {item.drinks.map((i) => <DrinksCart {...i} />)}
                </div>
            </div>
            )}
        </div>
    );
};

export default DrinksP;