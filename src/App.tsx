import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/MainPage';
import RouteSix from './Pages/RouteSix';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<About />}></Route>
          <Route path='/Route6' element={<RouteSix />}></Route>
        </Routes>
    </>
  );
}

export default App;
