import React from 'react';
import DessertCart from '../component/DessertCart/DessertCart';
import Header from '../component/Header/Header';
import dessert  from './../component/Array/desserts.json'
const DessertsPage = () => {
    console.log(dessert);
    const desert = [dessert]
    return (
        <div>
            <Header/>
            {desert.map((arr) =>
                arr.map((item) =>
                    <div className='MAIN'>
                        <p className='text'>{item.text}</p>
                        <div className='cart-f'>
                            {item.desserts.map((i) => <DessertCart {...i} />)}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default DessertsPage;