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
