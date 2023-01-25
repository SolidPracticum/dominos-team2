import React, { useState } from 'react';
import scss from './DessertCart.module.scss'
const DessertCart = ({ img, title, price, gramm, type }) => {
    const [activeType, setActiveType] = useState(0)
    return (
        <div className={scss.cart_dessert}>
            <div className={scss.cart_img_dessert}>
                <img className='image' src={img} alt="dessert" />
                <span>{gramm}</span>
            </div>
            <div className={scss.cart_b_dessert}>
                <div className={scss.cart_title_dessert}>
                    <p>{title}</p>
                </div>
                <div className={scss.cart_type_dessert}>
                    {type.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? scss.active : ''}>{item}</button>)}
                </div>
                <div className={scss.cart_price_dessert}>
                    <p>{price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
    );
};

export default DessertCart;