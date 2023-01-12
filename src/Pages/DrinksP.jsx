import React from 'react';
import DrinksPage from '../Components/DrinksPage/DrinksPage';
import drinks from './../drinks.json'
const DrinksP = () => {
    return (
        <div>
            {drinks.map((item) => <DrinksPage key={item.id} {...item}/>)}
        </div>
    );
};

export default DrinksP;