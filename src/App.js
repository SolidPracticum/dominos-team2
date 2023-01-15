
import { Route, Routes } from 'react-router-dom';
import "./main.scss"
import HomePage from "./page/HomePage";
import './App.scss';
import DrinksPage from './page/DrinksPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Promo" element={<h3>Promo</h3>} />
        <Route path="/Pizza" element={<h3>Pizza</h3>} />
        <Route path="/Drinks" element={<DrinksPage/>} />
        <Route path="/Sides" element={<h3>Sides</h3>} />
        <Route path="/Desserts" element={<h3>Desserts</h3>} />
        <Route path="/Checkout" element={<h3>Checkout</h3>} />
        <Route path="/Auth" element={<h3>Auth</h3>} />
      </Routes>

    </div>
  )
}


export default App;
