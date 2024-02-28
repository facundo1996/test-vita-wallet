import React from 'react'
import modal from '../assets/images/modal.png'

function ModalTransfer(props) {
  const { errorMessage } = props
  return (
    <div className="modal fade" id="modalId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {
            errorMessage
              ? <h3 className='info-modal negative'>{errorMessage}</h3>
              : <div className="modal-body">
                <div>
                  <img style={{ width: 308 }} src={modal} alt="" />
                  <h3 className='title-green'>¡Envío exitoso!</h3>
                </div>
                <div className='info-modal'>El destinatario recibirá el dinero en 30 minutos.</div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ModalTransfer