import React, { useContext, useEffect } from 'react'
import CardCoin from '../components/CardCoin'
import HistoryTable from '../components/HistoryTable'
import { getProfile } from '../api.jsx'
import { LogInContext } from '../contexts/userContext.jsx'
import { profileContext } from '../contexts/profileContext.jsx'

function HomePage() {
  const { token } = useContext(LogInContext)
  const { profileData, setProfileData } = useContext(profileContext)

  const getProfileData = async () => {
    const response = await getProfile(token)
    setProfileData(response.data)
  }

  useEffect(() => {
    if (token !== null) {
      getProfileData()
    }
  }, [token]);

  return (
    <div className='ps-5'>
      <div>
        <img style={{ width: '50px' }} src="/public/icons/coin.png" alt="" />
        <h2 className='my-5 fs-1'>¡Hola {profileData?.data?.attributes?.first_name || profileData?.data?.attributes?.email}!</h2>
      </div>
      <div>
        <h3 className='mt-5 fs-2 mb-4'>Mis Saldos</h3>
        <div className='card-container'>
          {
            profileData?.included?.map(coin => (
              <CardCoin key={coin.id} coin={coin} />
            ))
          }
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