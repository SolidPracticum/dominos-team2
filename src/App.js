

import Cart from "./Components/Cart/Cart";
import "./main.scss"
import pizza from './pizza.json'


function App() {
  return (
    <div className="App">
      <div className="cart-f">
      {pizza.map((item) => <Cart {...item}/>)}
      </div>
    </div>

import './App.scss';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>

  );
}

export default App;
