const baseUrl = 'http://localhost:6278';
const headers = { 'Content-Type': 'application/json' }
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
    console.log(request)
    if (request.ok) {
      const response = await request.json();
      console.log(response)
      return response;
    }
  }
  catch (err) {
    console.log(err);
  }

}

export { getAllCompanies };