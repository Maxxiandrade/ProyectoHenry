import './App.css';
import backgroundImg from './assets/backgroundImg.jpg';

import Landing from './components/Landing/landing';
import Home from './components/Home/Home';
import Cards from './components/Card/CardList';
import Pagination from './components/Pagination/Pagination'

import axios from 'axios';
import {Routes, Route, Router, useLocation} from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {


  useEffect(() => {
    switch (location.pathname) {
        case "/":
            document.body.style.backgroundImage = `url('${backgroundImg}')`;
            document.body.style.backgroundColor = null; 
            break; 
        default:
            document.body.style.backgroundImage = null;
            document.body.style.backgroundColor = "#F6F1EE";
    }
}, [location]);
  return (
    <>
    <div className="App">  
      <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/home' element={<Home></Home>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
