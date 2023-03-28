import { baseUrl, noTokenEndpoints } from '../homePage/homePageApi.js';
import { headers } from '../../pages/homePage/index.js';

const registerWithApi = async (body) => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.register}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })

  const response = await request.json();
  return response;
}

const loginWithApi = async (body) => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.login}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })

  const response = await request.json();
  return response;
}

const verifyAdmin = async (token) => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.verifyAdmin}`, {
    method: 'GET', 
    headers: {
      headers,
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

export { registerWithApi, loginWithApi, verifyAdmin };