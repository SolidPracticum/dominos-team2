import { useState } from "react"
import './Cart.scss'

const Cart = ({img, gramm, title, sizes, type, price}) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0)
    return (
        <div className="cart">
            <div className="cart_img">
                <img src={img} alt="pizza" />
                <span>{gramm}</span>
            </div>
            <div className="cart_b">
                <div className="cart_title">
                    <p>{title}</p>
                </div>
                <div className="cart-sizes">
                    {sizes.map((item, index) => <button onClick={() => setActiveSize(index)} className={activeSize === index ? 'active' : ""}>{item}</button>)}
                </div>
                <div className="cart-type">
                    {type.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? 'active' : ''}>{item}</button>)}
                </div>
                <div className="cart-price">
                    <p>{price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart