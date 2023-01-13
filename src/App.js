
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import category from './categoria.json'
import BestPrice from "./Components/Category/BestPrice";
import HomePage from "./Components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/" element={category.map((item) => <BestPrice key={item.id} {...item}/>)}/> */}
          <Route path="/" element={<HomePage/>} />
        </Routes>
    </div>
  );
}

export default App;