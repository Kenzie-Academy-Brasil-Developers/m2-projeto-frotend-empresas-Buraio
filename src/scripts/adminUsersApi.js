import { headers } from "../pages/homePage/index.js";
import { baseUrl } from "./homePageApi.js";

async function getAllUsers(token) {

  try {

    const request = await fetch(`${baseUrl}/users`, {
      method: 'GET',
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

export { getAllUsers };