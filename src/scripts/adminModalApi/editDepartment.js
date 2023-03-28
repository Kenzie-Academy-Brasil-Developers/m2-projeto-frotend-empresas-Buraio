import { baseUrl } from "../homePage/homePageApi.js";

export const apiEditDepartment = async (token, id, body) => {

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