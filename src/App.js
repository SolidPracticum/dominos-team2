
import Header from "./components/Header/Header";
import Auth from "./components/Pages/Auth";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./main.scss"


function App() {

  const [clicked, isClicked] = useState(false)
  return (

    <div>
      <Header clicked={clicked} isClicked={isClicked} />



      <Routes>
        <Route path="/" element={<h3>Domino</h3>} />
        <Route path="/Promo" element={<h3>Promo</h3>} />
        <Route path="/Pizza" element={<h3>Pizza</h3>} />
        <Route path="/Drinks" element={<h3>Drinks</h3>} />
        <Route path="/Sides" element={<h3>Sides</h3>} />
        <Route path="/Desserts" element={<h3>Desserts</h3>} />
        <Route path="/Checkout" element={<h3>Checkout</h3>} />

        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </div>
  );
}


export default App;
