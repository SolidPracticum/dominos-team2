
import asian from './../component/Array/pizzaAsian.json'
import bestPrice from './../component/Array/pizzaBestPrice.json'
import heroes from './../component/Array/pizzaHeroes.json'
import SimpleSlider from "../component/slider/Slider"
import Cart from '../component/PizzaCart/PizzaCart'
import scss from './Pages.module.scss'
import Header from '../component/Header/Header'
export default function HomePage() {
    const category = [asian, bestPrice, heroes]
    return (
        <div>
            <Header/>
            <div className={scss.content}>
            <SimpleSlider />
            {category.map((arr) =>
                arr.map((item) =>
                    <div className={scss.main_grid}>
                        <p className={scss.text}>{item.text}</p>
                        <div className={scss.cart_f}>
                            {item.pizzas.map((i) => <Cart {...i} />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}