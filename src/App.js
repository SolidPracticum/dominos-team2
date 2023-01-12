
import { Route, Routes } from "react-router-dom";
import DrinksP from "./Pages/DrinksP";
function App() {
  return (
    <div className="App">
      <div className="cart-f">
        <Routes>
        <Route path="/" element={<DrinksP/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;