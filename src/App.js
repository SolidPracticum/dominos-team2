import './App.scss';
import HomePage from './page/HomePage';
import { Route, Routes } from "react-router-dom";
import PromotionM from "./Components/PromotionM/PromotionM";
import DrinksP from "./page/DrinksPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksP />} />
        <Route path="/promo" element={<PromotionM/>}/>
        
      </Routes>
  </div>
  );
}

export default App;