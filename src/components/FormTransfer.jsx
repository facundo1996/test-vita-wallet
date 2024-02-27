import React, { useContext, useState } from 'react';
import check from '../assets/icons/check.png';
import dolarDesign from '../assets/icons/dollar-design.png';
import { transferContext } from '../contexts/transfersContext';

function FormTransfer() {

  const { transferData, setTransferData } = useContext(transferContext)

  function transferir(e) {
    e.preventDefault()
    setTransferData({
      transfer: {
        amount: amount,
        email: email,
        description: description,
      },
      case: 2
    })
  }

  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className='ps-5 pb-5 w-md d-flex flex-column justify-content-between'>

      <form className='mt-5'>
        <h3 className='mt-5 fs-2 mb-4'>
          ¿Cuánto deseas enviar?
        </h3>

        <div className='position-relative'>
          <label htmlFor="inputAmount" className="form-label">Tú envías</label>
          <span className='dolar-icon'>
            <img style={{ opacity: amount > 1 ? '1' : '0.3' }} src={dolarDesign} alt="" />
          </span>
          <input
            placeholder='00,00 CLP'
            type="number"
            className="form-control inputForm ps-md"
            id="inputAmount"
            aria-describedby="basic-addon4"
            autoComplete="username"
            onChange={(e) => setAmount(e.target.value)}
          />
          <span className='input-icon'>
            {
              amount > 0 && <img src={check} alt="" />
            }
          </span>
        </div>
        <div className="form-text mt-4" id="basic-addon4">Saldo disponible: $ 900.000,00 CLP</div>

        <h3 className='mt-5 fs-2 mb-4'>
          Destinatario
        </h3>

        <div className='position-relative'>

          <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
          <input
            placeholder='agustinagómez@gmail.com'
            type="email"
            className="form-control inputForm"
            id="inputEmail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className='input-icon'>
            {
              email.length > 6 && <img src={check} alt="" />
            }
          </span>
        </div>

        <div className='position-relative mt-3'>
          <label htmlFor="inputDescription" className="form-label">Descripción</label>
          <input
            placeholder='Escribe aquí un mensaje corto'
            type="text"
            maxLength={10}
            className="form-control inputForm"
            id="inputDescription"
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className='input-icon'>
            {
              description.length > 2 && <img src={check} alt="" />
            }
          </span>
        </div>

      </form>
      <div className='buttons-container' style={{gap: 20}}>
        <button className='btn-back btn-md' onClick={(e) => transferir(e)}>Atrás</button>
        <button className='btn-enabled btn-md border-0' onClick={(e) => transferir(e)}>Continuar</button>
      </div>
    </div >
  )
}

export default FormTransfer