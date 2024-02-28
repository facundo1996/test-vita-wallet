import React, { useContext, useEffect, useState } from 'react';
import check from '../assets/icons/check.png';
import dolarDesign from '../assets/icons/dollar-design.png';
import { transferContext } from '../contexts/transfersContext';
import { useNavigate } from 'react-router-dom';

function FormTransfer() {

  const navigate = useNavigate()
  const { transferData, setTransferData } = useContext(transferContext)

  function backPage(e){
    navigate('/')
  }

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

  const [amount, setAmount] = useState(Number)
  const [email, setEmail] = useState(String)
  const [description, setDescription] = useState(String)

  useEffect(() => {
    if(transferData.transfer.amount){
      setAmount(transferData.transfer.amount)
    }
    if(transferData.transfer.email){
      setEmail(transferData.transfer.email)
    }
    if(transferData.transfer.description){
      setDescription(transferData.transfer.description)
    }
  });

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
            placeholder='00,00 USDT'
            type="number"
            className="form-control inputForm ps-md"
            id="inputAmount"
            aria-describedby="basic-addon4"
            autoComplete="username"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span className='input-icon'>
            {
              amount > 0 && <img src={check} alt="" />
            }
          </span>
        </div>
        <div className="form-text mt-4" id="basic-addon4">Saldo disponible: $ 900.000,00 USDT</div>

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
            value={email}
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
            value={description}
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
        <button className='btn-back btn-md' onClick={(e) => backPage(e)}>Atrás</button>
        <button disabled={email.length > 6 && amount > 0 && description.length > 0 ?false :true} className='btn-enabled btn-md border-0' onClick={(e) => transferir(e)}>Continuar</button>
      </div>
    </div >
  )
}

export default FormTransfer