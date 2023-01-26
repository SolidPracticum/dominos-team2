
import Cart from '../component/Cart/Cart'
import Header from '../component/Header/Header'
import asian from './../component/Array/pizzaAsian.json'
import bestPrice from './../component/Array/pizzaBestPrice.json'
import heroes from './../component/Array/pizzaHeroes.json'

const PizzaPage = () => {
    const category = [asian, bestPrice, heroes]

    return (
        <div>
            <Header/>
            <div className="content">
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
        </div>
    )

}

export default PizzaPage