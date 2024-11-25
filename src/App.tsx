import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Main from './Pages/MainPage';
import RouteSix from './Pages/RouteSix';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<About />}></Route>
          <Route path='/Route6' element={<RouteSix />}></Route>
        </Routes>
      </>
    </QueryClientProvider>
  );
}

export default App;
