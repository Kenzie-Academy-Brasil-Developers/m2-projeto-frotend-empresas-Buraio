import { baseUrl, noTokenEndpoints } from './homePageApi.js';
import { headers } from '../pages/homePage/index.js';

export async function registerWithApi(body) {

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