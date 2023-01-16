
import asian from './../pizzaAsian.json'
import bestPrice from './../pizzaBestPrice.json'
import heroes from './../pizzaHeroes.json'
import SimpleSlider from "../component/slider/Slider"
import Cart from '../component/Cart/Cart'
import Header from '../component/Header/Header'
export default function HomePage() {
    const category = [asian, bestPrice, heroes]
    return (
        <div>
            <Header/>
            <SimpleSlider />
            {category.map((arr) =>
                arr.map((item) =>
                    <div className='MAIN'>
                        <p className='text'>{item.text}</p>
                        <div className='cart-f'>
                            {item.pizzas.map((i) => <Cart {...i} />)}
                        </div>
                    </div>
                ))}
        </div>
    )
}
