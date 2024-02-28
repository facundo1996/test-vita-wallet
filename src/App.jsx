import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import Transfers from "./pages/Transfers";
import { AuthRoute } from './components/AuthRoute';
import NavBar from './components/NavBar';
import { LogInContext } from './contexts/userContext';

function App() {
  const { token, setToken } = useContext(LogInContext)
  let tokenLocal = localStorage.getItem('token')
  tokenLocal = JSON.parse(tokenLocal)  

  useEffect(() => {
    if(tokenLocal !== null){
      setToken(tokenLocal)
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route element={<AuthRoute user={tokenLocal !== null} />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/transfers' element={<Transfers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App