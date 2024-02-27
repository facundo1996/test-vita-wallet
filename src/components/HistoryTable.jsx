import React from 'react'

function HistoryTable() {

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
          dataTable.map((data, i) =>
            <tr key={i}>
              <td className='title-table'>{data.title}</td>
              <td className='info-table'>{data.total}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default HistoryTable