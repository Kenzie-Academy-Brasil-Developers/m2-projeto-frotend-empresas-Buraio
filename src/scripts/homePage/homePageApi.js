import { headers } from "../../pages/homePage/index.js";

const baseUrl = 'http://localhost:6278';
const noTokenEndpoints = {
  register:    '/auth/register',
  login:       '/auth/login',
  companies:   '/companies',
  sectors:     '/sectors',
  verifyAdmin: '/auth/validate_user',
}

const getAllCompanies = async () => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.companies}`, {
    method: 'GET',
    headers: headers
  })

  if (request.ok) {
    const response = await request.json();
    return response;
  }
}

const getAllSectors = async () => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.sectors}`, {
    method: 'GET',
    headers: headers
  })

  if (request.ok) {
    const response = await request.json();
    return response;
  }
}

const getCompaniesBySector = async (sector) => {

  const request = await fetch(`${baseUrl}${noTokenEndpoints.companies}/${sector}`, {
    method: 'GET',
    headers: headers
  })

  if (request.ok) {
    const response = await request.json();
    return response;
  }
}

export { baseUrl, noTokenEndpoints, getAllCompanies, getAllSectors, getCompaniesBySector };