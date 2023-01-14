
import Auth from "./components/Pages/Auth";
import { Route, Routes } from 'react-router-dom';
import "./main.scss"
import HomePage from "./components/HomePage/HomePage";
import './App.scss';
import DrinksP from "./components/DrinksCart/DrinksCart"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksP />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Promo" element={<h3>Promo</h3>} />
        <Route path="/Pizza" element={<h3>Pizza</h3>} />
        <Route path="/Drinks" element={<h3>Drinks</h3>} />
        <Route path="/Sides" element={<h3>Sides</h3>} />
        <Route path="/Desserts" element={<h3>Desserts</h3>} />
        <Route path="/Checkout" element={<h3>Checkout</h3>} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>

    </div>
  )
}


export default App;
