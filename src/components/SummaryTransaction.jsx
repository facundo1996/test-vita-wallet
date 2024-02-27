import React, { useContext } from 'react'
import arrowLeft from '../assets/icons/arrow-left.png'
import { transferContext } from '../contexts/transfersContext'
import ModalTransfer from './ModalTransfer'

function SummaryTransaction() {
  const { transferData, setTransferData } = useContext(transferContext)

  function backPage() {
    setTransferData({
      ...transferData,
      case: transferData.case - 1
    })
  }
  function confirmTransfer() {

  }



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
            <b style={{ fontWeight: 600, color: 'rgba(22, 114, 135, 1)' }} >$ {transferData.transfer.amount} CLP</b>
          </div>

          <div className='col-6 py-1 title-summary'>Tasa de cambio</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600 }} >1 CLP = 0,27 ARS</b>
          </div>

          <div className='col-6 py-1 title-summary'>Destinatario recibe</div>
          <div className='col-6 py-1 info-summary text-end'>
            <b style={{ fontWeight: 600, color: 'rgba(22, 114, 135, 1)' }} >$ 135.438,38 ARS</b>
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