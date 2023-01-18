import Dessert from "../Dessert.json"
import DessertCart from "../component/DessertCart/DessertCart"
import Header from "../component/Header/Header"

const DessertPage = () => {
  const dessert = [Dessert]
    return(
        <div>
            <Header/>
            {dessert.map((arr) =>
            arr.map((item) =>
                <div>
                    <div className="cart">
                        {item.Dessert.map((i) => <DessertCart {...i} /> )}
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default DessertPage