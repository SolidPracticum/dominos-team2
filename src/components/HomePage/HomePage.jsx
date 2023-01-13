import React from 'react';
import Cart from '../Cart/Cart';
import pizza from './pizza.json'

const HomePage = () => {
  console.log(pizza)
  return (
    <div className='cart-f'>
      {pizza.map((item) => <Cart key={item.id} {...item}/>)}
    </div>
  );
};

export default HomePage;