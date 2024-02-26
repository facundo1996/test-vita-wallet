import axios from 'axios';

export async function signIn(data: { password: string, email: string }): Promise<string> {
  const headers = {
    
  };
  return await axios.post(`https://api.qa.vitawallet.io/api/auth/sign_in`, data, { headers })
    .then(res => {
      const token = res.headers['access-token']
      return token;
    })
    .catch(error => {

    })
}

