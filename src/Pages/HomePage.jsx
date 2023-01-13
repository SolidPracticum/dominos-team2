import React from 'react';
import Cart from '../Components/Cart/Cart';
import pizza from './../pizza.json'
const HomePage = () => {
    return (
        <div>
            <div className='cart-f'>
                {pizza.map((i) => <Cart {...i} />)}
            </div>
        </div>
    );
};

export default HomePage;