import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import { AuthRoute } from './components/AuthRoute';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        {true ?<NavBar /> :''}
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route element={<AuthRoute user={true} />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App