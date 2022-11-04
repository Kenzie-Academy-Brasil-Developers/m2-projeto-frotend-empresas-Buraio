import { baseUrl } from "../homePage/homePageApi.js";
import { headers } from '../../pages/homePage/index.js';

async function apiDelete(token, id) {

  try {

    const request = await fetch(`${baseUrl}/departments/${id}`, {
      method: 'DELETE',
      headers: {
        headers,
        'Authorization': `Bearer ${token}`
      }
    })

    const response = await request.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

export { apiDelete };