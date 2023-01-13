
import { Route, Routes } from "react-router-dom";
import DrinksP from "./Pages/DrinksP";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DrinksP />} />
      </Routes>
    </div>
  );
}

export default App;