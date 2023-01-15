import { useState } from 'react';
import scss from "./DrinksCart.module.scss"

const DrinksCart = ({ img, title, price, ml}) => {
    const [activeType, setActiveType] = useState(0)
    return (
    <div className={scss.cart_drinks} >
        <div className={scss.cart_img}>
            <img src={img} alt="drink" />
        </div>
        <div className={scss.cart_b}>
            <div className={scss.cart_title}>
                <p>{title}</p>
            </div>
            <div className={scss.cart_type}>
                {ml.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? scss.active : ''}>{item}</button>)}
            </div>
            <div className={scss.cart_price}>
                <p>{price} uah</p>
                <button>To cart</button>
            </div>
        </div>
    </div >)
}

export default DrinksCart