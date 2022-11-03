import { headers } from "../pages/homePage/index.js";

const baseUrl = 'http://localhost:6278';
const noTokenEndpoints = {
  register:    '/auth/register',
  login:       '/auth/login',
  companies:   '/companies',
  sectors:     '/sectors',
  verifyAdmin: '/auth/validate_user',
}

async function getAllCompanies() {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.companies}`, {
      method: 'GET',
      headers: headers
    })

    if (request.ok) {
      const response = await request.json();
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function getAllSectors() {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.sectors}`, {
      method: 'GET',
      headers: headers
    })

    if (request.ok) {
      const response = await request.json();
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }
}

async function getCompaniesBySector(sector) {

  try {

    const request = await fetch(`${baseUrl}${noTokenEndpoints.companies}/${sector}`, {
      method: 'GET',
      headers: headers
    })

    if (request.ok) {

      const response = await request.json();
      return response;

    }
  }
  catch (err) {
    console.log(err);
  }
}

export { baseUrl, noTokenEndpoints, getAllCompanies, getAllSectors, getCompaniesBySector };