import { useState } from "react"
import scss from './PizzaCart.module.scss'
const Cart = ({img, gramm, title, sizes, type, price}) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0)
    return (
        <div className={scss.cart_pizza}>
            <div className={scss.cart_img_pizza}>
                <img src={img} alt="pizza" />
                <span>{gramm}</span>
            </div>
            <div className={scss.cart_b_pizza}>
                <div className={scss.cart_title_pizza}>
                    <p>{title}</p>
                </div>
                <div className={scss.cart_sizes_pizza}>
                    {sizes.map((item, index) => <button onClick={() => setActiveSize(index)} className={activeSize === index ? scss.active : ""}>{item}</button>)}
                </div>
                <div className={scss.cart_type_pizza}>
                    {type.map((item, index) => <button onClick={() => setActiveType(index)} className={activeType === index ? scss.active : ''}>{item}</button>)}
                </div>
                <div className={scss.cart_price_pizza}>
                    <p>{price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart