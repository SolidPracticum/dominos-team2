import { useState } from 'react';
import './DrinksPage.scss'

const DrinksCart = ({ img, title, price, ml}) => {
    const [activeType, setActiveType] = useState(0)
    return (
    <div className="cart" >
        <div className="cart_img">
            <img src={img} alt="drink" />
        </div>
        <div className="cart_b">
            <div className="cart_title">
                <p>{title}</p>
            </div>
            <div className="cart-type">
                {ml.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? 'active' : ''}>{item}</button>)}
            </div>
            <div className="cart-price">
                <p>{price} uah</p>
                <button>To cart</button>
            </div>
        </div>
    </div >)
}

export default DrinksCart