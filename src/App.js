
import { Route, Routes } from "react-router-dom";
import DrinksP from "./Pages/DrinksPage";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksP />} />
      </Routes>
    </div>
  );
}

export default App;