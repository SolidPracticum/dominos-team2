import './App.scss';
import HomePage from './page/HomePage';
import { Route, Routes } from "react-router-dom";
import DrinksP from "./page/DrinksPage";
import PromotionMain from './Components/PromotionMain/PromotionMain';
import SidesPage from './page/SidesPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksP />} />
        <Route path="/promotions" element={<PromotionMain/>}/>
        <Route path='/sides' element={<SidesPage/>}/>
        
      </Routes>
  </div>
  );
}

export default App;