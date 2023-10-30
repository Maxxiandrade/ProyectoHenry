import './App.css';
import backgroundImg from './assets/backgroundImg.jpg';

import Landing from './components/Landing/landing';
import Home from './components/Home/Home';
import Cards from './components/Card/CardList';
import Pagination from './components/Pagination/Pagination'

import axios from 'axios';
import {Routes, Route, Router, useLocation} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {
  document.title = 'Henry Dogs';
  return (
    <>
    <div className="App">  
      <Routes>
      <Route path='/' element={<Landing></Landing>}/>
      <Route path='/home' element={<Home></Home>}/>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/createdog' element={<Form />}></Route>
      </Routes>
    </div>
  </>
  );
}

export default App;
