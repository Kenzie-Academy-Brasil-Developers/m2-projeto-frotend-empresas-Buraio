import { baseUrl } from "./homePageApi.js";
import { headers } from '../pages/homePage/index.js'

async function getAllDepartments(token) {

  try {

    const request = await fetch(`${baseUrl}/departments`, {
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
    console.log(err);
  }
}

export { getAllDepartments };