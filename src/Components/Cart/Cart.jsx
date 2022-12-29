

const Cart = (props) => {
    return (
        <div className="cart">
            <img src={props.img} alt="" />
            <div className="cart_b">
                <p>{props.title}</p>
                <button>{props.sizes}</button>
                <button>{props.type}</button>
                <div>
                    <p>{props.price} uah</p>
                    <button>To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart