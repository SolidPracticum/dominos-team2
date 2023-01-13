import { Route, Routes } from 'react-router-dom';
import "./main.scss"
import './App.scss';
import HomePage from './page/HomePage';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  );
}

export default App;