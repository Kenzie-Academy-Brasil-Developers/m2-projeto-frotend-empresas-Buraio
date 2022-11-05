import { baseUrl } from "../homePage/homePageApi.js";

export async function apiEditUser(token, id, body) {

  try {

    const request = await fetch(`${baseUrl}/admin/update_user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    const response = await request.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }

}
