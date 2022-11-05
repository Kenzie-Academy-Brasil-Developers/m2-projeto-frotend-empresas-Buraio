import { baseUrl } from "../homePage/homePageApi.js";
import { headers } from "../../pages/homePage/index.js";
import { token } from "../adminPage/getAccount.js";

async function apiUserProfile(token) {

  try {

    const request = await fetch(`${baseUrl}/users/profile`, {
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
    console.log(err)
  }
}

async function editUserProfile(token, body) {

  try {

    const request = await fetch(`${baseUrl}/users`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    })

    const response = await request.json();
    console.log(response)
    return response;
  }
  catch (err) {
    console.log(err)
  }

}

async function loggedUserDepartment(token) {

  try {

    const request = await fetch(`${baseUrl}/users/departments`, {
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
    console.log(err)
  }

}

async function getCoworkers(token) {

  try {

    const request = await fetch(`${baseUrl}/users/departments/coworkers`, {
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
    console.log(err)
  }

}

const data = await getCoworkers(token.token);
// console.log(data.users)

export { apiUserProfile, editUserProfile, loggedUserDepartment, getCoworkers };