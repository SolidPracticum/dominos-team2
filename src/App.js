
import Cart from "./Components/Cart/Cart";
import "./main.scss"
import pizza from './pizza.json'


function App() {
  return (
    <div className="App">
      <div className="cart-f">
      {pizza.map((item) => <Cart key={item.id} {...item}/>)}
      </div>
    </div>
  );
}

export default App;