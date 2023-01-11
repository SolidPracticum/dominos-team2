
import { Route, Routes } from "react-router-dom";
import './Components/Cart/Cart.scss'
import PromotionM from "./Components/PromotionM/PromotionM";

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