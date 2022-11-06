import { baseUrl } from "../homePage/homePageApi.js";
import { headers } from "../../pages/homePage/index.js";

const apiUserProfile = async (token) => {

  const request = await fetch(`${baseUrl}/users/profile`, {
    method: 'GET', 
    headers: {
      headers,
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

const editUserProfile = async (token, body) => {

  const request = await fetch(`${baseUrl}/users`, {
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

const loggedUserDepartment = async (token) => {

  const request = await fetch(`${baseUrl}/users/departments`, {
    method: 'GET', 
    headers: {
      headers,
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

const getCoworkers = async (token) => {

  const request = await fetch(`${baseUrl}/users/departments/coworkers`, {
    method: 'GET', 
    headers: {
      headers,
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

export { apiUserProfile, editUserProfile, loggedUserDepartment, getCoworkers };