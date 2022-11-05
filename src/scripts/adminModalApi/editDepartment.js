import { baseUrl } from "../homePage/homePageApi.js";

export async function apiEditDepartment(token, id, body) {

  try {

    const request = await fetch(`${baseUrl}/departments/${id}`, {
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