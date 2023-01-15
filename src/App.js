
import { Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage";
import './App.scss';
import DrinksPage from './page/DrinksPage';
import PromotionPage from './page/PromotionPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/promotions" element={<PromotionPage/>}/>
      </Routes>

    </div>
  )
}


export default App;
