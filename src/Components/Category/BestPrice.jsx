import React, { useState } from 'react';
const BestPrice = (props) => {
    const [activeSize, setActiveSize] = useState(0)
    const [activeType, setActiveType] = useState(0);
    return (
        <div className='best'>
        <div className="cart">
            <div className="cart_img">
                <img src={props.img} alt="pizza" />
                <span>{props.gramm}</span>
            </div>
            <div className="cart_b">
                <div className="cart_title">
                    <p>{props.title}</p>
                </div>
                <div className="cart-sizes">
                    {props.sizes.map((item, index) => <button onClick={() => setActiveSize(index)} className={activeSize === index ? 'active' : ""}>{item}</button>)}
                </div>
                <div className="cart-type">
                    {props.type.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? 'active' : ''}>{item}</button>)}
                </div>
                <div className="cart-price">
                    <p>{props.price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BestPrice;