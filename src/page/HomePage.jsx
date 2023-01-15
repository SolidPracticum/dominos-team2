import Header from "../Components/Header/Header"
import SimpleSlider from "../Components/slider/Slider";
import Cart from "../Components/Cart/Cart"
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