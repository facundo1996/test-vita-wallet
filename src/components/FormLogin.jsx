import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogInContext } from '../contexts/userContext'
import { signIn } from '../api.jsx'
import eye from '../assets/icons/eye.png'
import eyeOff from '../assets/icons/eye-off.png'
import check from '../assets/icons/check.png'


function FormLogin() {
  const { setToken } = useContext(LogInContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const login = async (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password,
      dev_mode: true
    }
    const token = await signIn(data)
    setToken(token)
    localStorage.setItem('token', JSON.stringify(token))
    navigate('/')
  }


  return (
    <form className='form-login'>
      <div className="mb-3 position-relative">
        <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
        <input
          placeholder='juan@gmail.com'
          type="email"
          className="form-control inputForm"
          id="inputEmail"
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className='input-icon'>
          {
            email.length > 6 && <img src={check} alt="" />
          }
        </span>
      </div>
      <div className="mb-3 position-relative">
        <label htmlFor="InputPassword" className="form-label">Contraseña</label>
        <input
          placeholder='Escribe tu contraseña'
          type={showPassword ? 'text' : 'password'}
          className="form-control inputForm"
          id="InputPassword"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setShowPassword(!showPassword)} className='input-icon'>
          {
            showPassword
              ? <img src={eye} alt="" />
              : <img src={eyeOff} alt="" />
          }
        </span>
        <div id="passwordHelp" className="form-text text-end">¿Olvidaste tu contaseña?</div>
      </div>
      <button
        onClick={(e) => login(e)}
        disabled={email.length > 6 && password.length > 6 ? false : true}
        className={email.length > 6 && password.length > 6 ? "btn-login btn-enabled mt-5" : 'btn-login btn-disabled mt-5'}
      >
        Iniciar sesión
      </button>
    </form>
  )
}

export default FormLogin