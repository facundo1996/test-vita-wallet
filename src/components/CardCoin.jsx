import React from 'react'
import IconChile from '../assets/icons/chile.png';
function CardCoin() {
  return (
    <div className='card-coin p-4 d-flex flex-column justify-content-between'>
      <div className='w-100 d-flex justify-content-between align-items-center'>
        <div className='fs-5'>Peso Chileno</div>
        <div><img src={IconChile} alt="" /></div>
      </div>
      <div className='fs-4'>
        $9000
      </div>
    </div>
  )
}

export default CardCoin