import PromotionM from "./Components/PromotionM/PromotionM";
import Cart from "./Components/Cart/Cart";
import "./main.scss"
import './App.scss';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="cart-f">
        <Routes>
          <Route path="/" element={<PromotionM/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;