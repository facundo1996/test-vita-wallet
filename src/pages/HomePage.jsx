import React from 'react'
import CardCoin from '../components/CardCoin'
import HistoryTable from '../components/HistoryTable'
function HomePage() {
  return (

    <div className='ps-5'>
      <div>
        <img style={{width: '50px'}} src="/public/icons/coin.png" alt="" />
        <h2 className='my-5 fs-1'>¡Hola Facundo!</h2>
      </div>
      <div>
        <h3 className='mt-5 fs-2 mb-4'>Mis Saldos</h3>
        <div className='card-container'>
          <CardCoin />
          <CardCoin />
          <CardCoin />
        </div>
      </div>
      <div>
        <h3 className='mt-5 fs-2 mb-4'>Historial</h3>
        <HistoryTable />
      </div>
    </div>
  )
}

export default HomePage