import React from 'react'

function Transfers() {

  function transferir(e){
    e.preventDefault()
  }


  return (
    <div className='ps-5'>
      <h3 className='mt-5'>
        ¿Cuánto deseas enviar?
      </h3>
      <form className='mt-5'>
        <label htmlFor="exampleInputEmail1" className="form-label">Tú envías</label>
        <input
          placeholder='00,00 CLP'
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="basic-addon4"
          autoComplete="username"
        />
        <div class="form-text" id="basic-addon4">Saldo disponible: $ 900.000,00 CLP</div>

        <label htmlFor="inputEmail" className="form-label mt-5">Correo electrónico</label>
        <input
          placeholder='agustinagómez@gmail.com'
          type="email"
          className="form-control"
          id="inputEmail"
          autoComplete="username"
        />

        <label htmlFor="inputDescription" className="form-label mt-3">Descripción</label>
        <input
          placeholder='Escribe aquí un mensaje corto'
          type="text"
          className="form-control"
          id="inputDescription"
          aria-describedby="basic-addon4"
          autoComplete="username"
        />

        <button onClick={(e)=> transferir(e)}>Continuar</button>
      </form >
    </div >
  )
}

export default Transfers