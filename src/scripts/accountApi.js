import { baseUrl, noTokenEndpoints } from './homePageApi.js';
import { headers } from '../pages/homePage/index.js';

export const registerWithApi = async (body) => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.register}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })

  const response = await request.json();
  return response;
};