import React from 'react'

function CardCoin(props) {
  const { coin } = props
  return (
    <div className='card-coin p-4 d-flex flex-column justify-content-between'>
      <div className='w-100 d-flex justify-content-between align-items-center'>
        <div className='fs-5'>{ coin?.attributes?.currency_name }</div>
        <div><img src={coin?.attributes?.flag_url} alt="" /></div>
      </div>
      <div className='fs-4 bold-xl'>
        $ {coin?.attributes?.deposit_fee}
      </div>
    </div>
  )
}

export default CardCoin