import { baseUrl, noTokenEndpoints } from '../homePage/homePageApi.js';
import { headers } from '../../pages/homePage/index.js';

async function registerWithApi(body) {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.register}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const response = await request.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

async function loginWithApi(body) {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.login}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const response = await request.json();
    console.log(response)
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

async function verifyAdmin(token) {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.verifyAdmin}`, {
      method: 'GET', 
      headers: {
        headers,
        'Authorization': `Bearer ${token}`
      }
    })


    const response = await request.json();
    console.log(response)
    return response;

  }
  catch (err) {
    console.log(err)
  }

}

export { registerWithApi, loginWithApi, verifyAdmin };