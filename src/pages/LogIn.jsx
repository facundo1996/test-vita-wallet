import React from 'react'
import { Link } from 'react-router-dom'

function LogInPage() {
  return (
    <div className='container-app'>

      <div className='row homepage-container'>

        <div className='col-5 log-in-container'>
          <div style={{ width: '387px' }}>
            <h1 className='h1'>
              Iniciar Sesión
            </h1>
            <form className='form-log-in'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                <input placeholder='juan@gmail.com' type="email" className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input placeholder='Escribe tu contraseña' type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" />
                <div id="passwordHelp" className="form-text text-end">¿Olvidaste tu contaseña?</div>
              </div>
              <Link to={'/'} type="submit" className="btn-log-in">Iniciar sesión</Link>
            </form>
          </div>
        </div>

        <div className='col-7 image-log-in'>

        </div>

      </div>
    </div>
  )
}

export default LogInPage