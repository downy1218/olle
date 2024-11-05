import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/MainPage';
import Contact from './Pages/Contact';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
    </>
  );
}

export default App;
