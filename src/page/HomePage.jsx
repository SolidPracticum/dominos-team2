import SimpleSlider from "../components/slider/Slider";
import pizza from "../pizza.json"
import Cart from "../components/Cart/Cart"

export default function HomePage() {
    return (
        <div>
            <SimpleSlider />
            <div className="cart-f">
                {pizza.map((item) => <Cart key={item.id} {...item} />)}
            </div>
        </div>
    )
}