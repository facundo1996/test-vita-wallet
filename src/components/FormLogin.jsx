import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { LogInContext } from '../contexts/userContext'

function FormLogin() {
  const { setAuth } = useContext(LogInContext)
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const login = async(e)=>{
    e.preventDefault()
    const data = {
      email: email,
      password : password,
      dev_mode: true
    }

    const headers = {  };

    const res = await axios.post(`https://api.qa.vitawallet.io/api/auth/sign_in`, data, {headers: headers})
    if(res.status === 200){
      const token = res.headers['access-token']
      localStorage.setItem(`token`, JSON.stringify(token))
      setAuth(token)
      navigate('/')
    }
  }


  return (
    <form className='form-log-in'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input
          placeholder='juan@gmail.com'
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
        <input
          placeholder='Escribe tu contraseña'
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="passwordHelp" className="form-text text-end">¿Olvidaste tu contaseña?</div>
      </div>
      <button onClick={(e) => login(e)} className="btn-log-in">Iniciar sesión</button>
    </form>
  )
}

export default FormLogin