import React from 'react';
import drinks from '../component/Array/drinks.json'
import juice from '../component/Array/juice.json'
import beer from '../component/Array/beer.json'
import './Pages.scss'
import DrinksCart from '../component/DrinksCart/DrinksCart';
import Header from '../component/Header/Header';
const DrinksPage = () => {
    const category = [drinks, juice, beer]
    return (
        <div>
            <Header />
            <div className="content">
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
        </div>
    );
};

export default DrinksPage;