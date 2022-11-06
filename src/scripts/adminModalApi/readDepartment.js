import { baseUrl } from "../homePage/homePageApi.js";

export async function getOutOfWorkApi(token) {

  const request = await fetch(`${baseUrl}/admin/out_of_work`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  const response = await request.json();
  return response;
};