import React from 'react'
import FormLogin from '../components/FormLogin'

function LogInPage() {
  return (
    <div className='container-app'>

      <div className='row homepage-container'>

        <div className='col-5 log-in-container'>
          <div style={{ width: '387px' }}>
            <h1 className='h1'>
              Iniciar Sesión
            </h1>
            <FormLogin />
          </div>
        </div>

        <div className='col-7 image-log-in'>
        </div>

      </div>
    </div>
  )
}

export default LogInPage