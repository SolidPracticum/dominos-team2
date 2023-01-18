import React, { useState } from 'react';
import scss from './DessertCart.module.scss'
const DessertCart = ({img, title, type, price, gramm}) => {
    const [activeType, setActiveType] = useState(0)
    return (
            <div className={scss.cart_sides} >
                <div className={scss.cart_img_sides}>
                    <img className='image' src={img} alt="sides" />
                    <span>{gramm}</span>
                </div>
                <div className={scss.cart_b_sides}>
                    <div className={scss.cart_title_sides}>
                        <p>{title}</p>
                    </div>
                    <div className={scss.cart_type_sides}>
                        {type.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? scss.active : ''}>{item}</button>)}
                    </div>
                    <div className={scss.cart_price_sides}>
                        <p>{price} uah</p>
                        <button>To cart</button>
                    </div>
                </div>
            </div >
    );
};

export default DessertCart;