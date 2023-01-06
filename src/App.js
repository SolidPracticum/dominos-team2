
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import './Components/Cart/Cart.scss'
import PromotionM from "./Components/PromotionM/PromotionM";
import pizza from './pizza.json'

function App() {
  return (
    <div className="App">
      <div className="cart-f">
        <Routes>
          {/* <Route path="/" element={pizza.map((item) => <Cart key={item.id} {...item} />)} /> */}
          <Route path="/" element={<PromotionM />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;