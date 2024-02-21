import React from 'react'

function HomePage() {
  return (
    <div className='row homepage-container'>

      <div className='col-4 log-in-container'>
        <div style={{width: '387px'}}>
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
            <button type="submit" className="btn-log-in">Iniciar sesión</button>
          </form>
        </div>
      </div>

      <div className='col-8 image-log-in'>
      </div>

    </div>
  )
}

export default HomePage