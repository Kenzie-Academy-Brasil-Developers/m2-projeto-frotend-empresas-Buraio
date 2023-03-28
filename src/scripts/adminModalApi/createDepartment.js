import { baseUrl } from "../homePage/homePageApi.js";

const apiCreate = async (token, body) => {

  const request = await fetch(`${baseUrl}/departments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })

  const response = await request.json();
  return response;
}

export { apiCreate };