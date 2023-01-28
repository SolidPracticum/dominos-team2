
import Cart from '../component/PizzaCart/PizzaCart'
import Header from '../component/Header/Header'
import asian from './../component/Array/pizzaAsian.json'
import bestPrice from './../component/Array/pizzaBestPrice.json'
import heroes from './../component/Array/pizzaHeroes.json'
import scss from './Pages.module.scss'
const PizzaPage = () => {
    const category = [asian, bestPrice, heroes]

    return (
        <div>
            <Header/>
            <div className={scss.content}>
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

export default PizzaPage