import { baseUrl } from "../homePage/homePageApi.js";

async function apiCreate(token, body) {

  try {

    const request = await fetch(`${baseUrl}/departments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    console.log(request)

    const response = await request.json();
    console.log(response)
    return response;
  }
  catch (err) {
    console.log(err);
  }

}

export { apiCreate };