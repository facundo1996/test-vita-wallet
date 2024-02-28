import axios from 'axios';

const config = {
  headers: {
    'app-name': 'ANGIE',
    'access-token': '',
    'uid': '',
    'expiry': '',
    'client': '',
  }
}

export async function signIn(data) {
  const headers = {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'app-name': 'ANGIE',
  };
  return await axios.post(`https://api.qa.vitawallet.io/api/auth/sign_in`, data, { headers })
    .then(res => {
      config.headers = {
        'app-name': 'ANGIE',
        'access-token': res.headers['access-token'],
        'uid': res.headers.uid,
        'expiry': res.headers.expiry,
        'client': res.headers.client,
      };
      return config.headers;
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error);
      throw error;
    })
}

export async function getProfile(headersProp) {
  const HeadersConfig = {
    headers: {
      ...headersProp
    }
  }
  return await axios.get(` https://api.qa.vitawallet.io/api/profile`, HeadersConfig)
    .then(res => {
      return res
    })
    .catch(error => {
      console.error(error);
      throw error;
    })
}

export async function getHistory(headersProp) {
  const HeadersConfig = {
    headers: {
      ...headersProp
    }
  }
  return await axios.get(` https://api.qa.vitawallet.io/api/transactions`, HeadersConfig)
    .then(res => {
      return res
    })
    .catch(error => {
      console.error(error);
      throw error;
    })
}
export async function getPrices(headersProp) {
  const HeadersConfig = {
    headers: {
      ...headersProp
    }
  }
  return await axios.get(` https://api.qa.vitawallet.io/api/users/get_crypto_multi_prices`, HeadersConfig)
    .then(res => {
      return res
    })
    .catch(error => {
      console.error(error);
      throw error;
    })
}
export async function sendTransaction( data, headersProp) {
  const HeadersConfig = {
    headers: {
      ...headersProp
    }
  }
  return await axios.post(` https://api.qa.vitawallet.io/api/transactions/exchange`, data, HeadersConfig)
    .then(res => {
      return res
    })
    .catch(error => {
      return error
    })
}

