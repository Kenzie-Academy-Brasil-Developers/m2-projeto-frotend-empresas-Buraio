import { baseUrl } from "../homePage/homePageApi.js";
import { headers } from "../../pages/homePage/index.js";

export async function apiDeleteUser(token, id) {

  try {

    const request = await fetch(`${baseUrl}/admin/delete_user/${id}`, {
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
