import SimpleSlider from "../Components/slider/Slider"
import pizza from "../pizza.json"
import Cart from "../Components/Cart/Cart"

export default function HomePage() {
    return (
        <div>
            <SimpleSlider/>
            <div className="cart-f">
                {pizza.map((item) => <Cart key={item.id} {...item} />)}
            </div>
        </div>
    )
}