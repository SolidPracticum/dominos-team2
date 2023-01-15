
import { Route, Routes } from 'react-router-dom';
import "./main.scss"
import HomePage from "./page/HomePage";
import './App.scss';
import PromotionMain from './Components/PromotionMain/PromotionMain';
import SidesPage from './page/SidesPage';
import DrinksPage from './page/DrinksPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/promotions" element={<PromotionMain/>}/>
        <Route path='/sides' element={<SidesPage/>}/>
      </Routes>

    </div>
  )
}


export default App;
