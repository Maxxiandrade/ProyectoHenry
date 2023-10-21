import './App.css';
import Landing from './components/Landing/landing';
import Home from './components/Home/Home';

import axios from 'axios';
import {Routes, Route, Router} from 'react-router-dom';

function App() {

  const onSearch = ()=>{

  }

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/home' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
