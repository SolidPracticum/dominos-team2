
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import './Components/Cart/Cart.scss'
import pizza from './pizza.json'
import category from './categoria.json'
import BestPrice from "./Components/Category/BestPrice";
import './Components/Category/Category.scss'
function App() {
  return (
    <div className="App">
      <div className="cart-f">
        <Routes>
          <Route path="/" element={category.map((item) => <BestPrice key={item.id} {...item}/>)}/>
          {/* <Route path="/" element={pizza.map((item) => <Cart key={item.id} {...item} />)} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;