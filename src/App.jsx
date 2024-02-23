import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import Transfers from "./pages/Transfers";
import { AuthRoute } from './components/AuthRoute';
import NavBar from './components/NavBar';
import { LogInContext } from './contexts/userContext';

function App() {
  const { auth, setAuth } = useContext(LogInContext)
  const tokenLocal = localStorage.getItem('token')
  return (
    <>
      <BrowserRouter>
        {auth || tokenLocal ?<NavBar /> :''}
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route element={<AuthRoute user={auth || tokenLocal} />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/transfers' element={<Transfers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App