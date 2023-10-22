import './App.css';
import Landing from './components/Landing/landing';
import Home from './components/Home/Home';
import Cards from './components/Card/CardList';
import Pagination from './components/Pagination/Pagination'

import axios from 'axios';
import {Routes, Route, Router} from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {
   const [currentPage, setCurrentPage] = useState(1);
  const perrosPorPagina = 8; 
  const paginas = []


  return (
    <>
    <div className="App">
      
      <h1>Henry Dogs</h1>   
      <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/home' element={<Home></Home>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
