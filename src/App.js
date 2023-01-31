
import { Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage";
import './App.scss';
import DrinksPage from './page/DrinksPage';
import PromotionPage from './page/PromotionPage';
import SidesPage from './page/SidesPage';
import DessertsPage from './page/DessertsPage';
import PizzaPage from './page/PizzaPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Promo" element={<PromotionPage/>} />
        <Route path="/Drinks" element={<DrinksPage/>} />
        <Route path="/Sides" element={<SidesPage/>} />
        <Route path='/Pizza' element={<PizzaPage/>}/>
        <Route path="/Desserts" element={<DessertsPage/>} />
        <Route path="/Checkout" element={<h3>Checkout</h3>} />
        <Route path="/Auth" element={<h3>Auth</h3>} />
      </Routes>

    </div>
  )
}


export default App;
