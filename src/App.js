import PromotionM from "./Components/PromotionM/PromotionM";
import './App.scss';
import HomePage from './page/HomePage';
import { Route, Routes } from "react-router-dom";
import DrinksP from "./page/DrinksPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksP />} />
        <Route path="/promotions" element={<PromotionM/>}/>
      </Routes>
  </div>
  );
}

export default App;