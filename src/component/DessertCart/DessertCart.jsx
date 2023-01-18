import scss from "./DessertCart.module.scss"

const DessertCart = ({img, title, g, price}) => {
    return(
        <div className={scss.cartSides}>
            <div className={scss.cartImg}>
                <img className={scss.image} src={img} alt="img" />
                <span>{g} g</span>
            </div>
            <div className={scss.cart_sides}>
                <p>{title}</p>
            </div>
            <div className={scss.price}>
                <p>{price} uah</p>
                <button>To Cart</button>
            </div>
        </div>  
    );
};

export default DessertCart;