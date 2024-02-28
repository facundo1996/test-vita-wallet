import React, { useContext, useEffect, useState } from 'react'
import arrowLeft from '../assets/icons/arrow-left.png'
import { transferContext } from '../contexts/transfersContext'
import ModalTransfer from './ModalTransfer'
import { LogInContext } from '../contexts/userContext'
import { getPrices, sendTransaction } from '../api.jsx'
import { pricesContext } from '../contexts/pricesContext.jsx'

function SummaryTransaction() {
  const { transferData, setTransferData } = useContext(transferContext)
  const { setPricesData } = useContext(pricesContext)
  const { token } = useContext(LogInContext)
  const [valueUSDT, setValueUSDT] = useState(0)

  const getPricesData = async () => {
    const response = await getPrices(token)
    setPricesData(response.data)
    setValueUSDT(response.data.prices.usdt.usd_sell.toFixed(2))
  }

  function backPage() {
    setTransferData({
      ...transferData,
      case: transferData.case - 1
    })
  }

  const sendTransferData = async () => {
    let data = {
      "currency_sent": "usdt",
      "currency_received": "usd",
      "amount_sent": transferData?.transfer?.amount
    }
    const response = await sendTransaction(data, token)
  }

  function confirmTransfer() {
    sendTransferData()
    setTransferData({
      transfer: {
        amount: Number,
        email: String,
        description: String,
      },
      case: 1
    })
  }

  useEffect(() => {
    getPricesData()
  }, []);



  return (
    <div className='ps-xl pb-5 w-xl d-flex flex-column justify-content-between'>
      <div>


        <h3 className='mt-5 fs-2 mb-4 position-relative'>
          <img onClick={backPage} className='back-arrow' src={arrowLeft} alt="" />
          Resumen de transacción
        </h3>

        <div className='row sumarry-container'>

          <div className='col-6 py-1 title-summary'>Destinatario</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600 }} >{transferData.transfer.email}</b>
          </div>

          <div className='col-6 py-1 title-summary'>Tú envías</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600, color: 'rgba(22, 114, 135, 1)' }} >$ {transferData?.transfer?.amount} USDT</b>
          </div>

          <div className='col-6 py-1 title-summary'>Tasa de cambio</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600 }} >1 USDT = {valueUSDT} USD</b>
          </div>

          <div className='col-6 py-1 title-summary'>Destinatario recibe</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600, color: 'rgba(22, 114, 135, 1)' }} >$ {transferData?.transfer?.amount * valueUSDT}</b>
          </div>

          <div className='col-6 py-1 title-summary'>Fecha de arribo</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600 }} >30 minutos</b>
          </div>

        </div>

      </div>

      <div className='buttons-container' style={{ gap: 120 }}>
        <button className='btn-back btn-md' onClick={backPage} >Atrás</button>
        <button className='btn-enabled btn-md border-0' onClick={confirmTransfer} data-bs-toggle="modal" data-bs-target="#modalId">Transferir</button>
        <ModalTransfer />
      </div>
    </div >
  )
}

export default SummaryTransaction