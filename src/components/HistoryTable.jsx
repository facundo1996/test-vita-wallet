import React from 'react'

function HistoryTable(props) {
  const { history } = props

  const dataTable = [
    {
      title: 'Recibiste',
      total: 1200
    },
    {
      title: 'Recargaste',
      total: 534
    },
    {
      title: 'Transferiste',
      total: 777
    },
    {
      title: 'Intercambiaste',
      total: 564
    },
  ]

  return (
    <table className="table">
      <tbody>
        {
          history?.data.lenght > 0
            ? history.data.map(data => (
              <tr key={data.id}>
                <td className='title-table'>{data.title}</td>
                <td className='info-table'>{data.total}</td>
              </tr>
            ))
            : dataTable.map((data, i) => (
              <tr key={i}>
              <td className='title-table'>{data.title}</td>
              {
                (data.title === 'Recibiste' || data.title === 'Recargaste')
                ?<td className='info-table positive'>+ ${data.total}</td>
                :data.title === 'Transferiste'
                ?<td className='info-table negative'>- ${data.total}</td>
                :<td className='info-table neutral'>${data.total}</td>
              }
              </tr>
              ))
              /* :<div className='not-transactions'>NO EXISTEN TRANSACCIONES</div> */
        }
      </tbody>
    </table>
  )
}

export default HistoryTable