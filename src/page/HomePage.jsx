import Header from "../components/Header/Header"
import SimpleSlider from "../components/slider/Slider";
import Cart from "../components/Cart/Cart"
import asian from './../pizzaAsian.json'
import bestPrice from './../pizzaBestPrice.json'
import heroes from './../pizzaHeroes.json'
const  HomePage = () =>  {
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
export default HomePage