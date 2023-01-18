

const Cart = (props) => {
    return (
        <div className="cart">
            <img src={props.img} alt="" />
            <div className="cart_b">
                <p>{props.title}</p>
                <div className="cart-sizes">
                    {props.sizes.map((item) => <button>{item}</button>)}
                </div>
                <div className="cart-type">
                    {props.type.map((item) => <button>{item}</button>)}
                </div>
                <div className="cart-price">
                    <p>{props.price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart