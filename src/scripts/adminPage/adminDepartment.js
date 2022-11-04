import { baseUrl } from "../homePage/homePageApi.js";
import { headers, companyArr } from '../../pages/homePage/index.js'
import { token, departmentList, renderDepartmentCards } from './getAccount.js';
import { crudCallFunction } from "../adminModal.js";

async function getAllDepartments(token) {

  try {

    const request = await fetch(`${baseUrl}/departments`, {
      method: 'GET',
      headers: {
        headers,
        'Authorization': `Bearer ${token}`
      }
    })

    const response = await request.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

async function getDepartmentsByCompany(token, id) {

  try {

    const request = await fetch(`${baseUrl}/departments/${id}`, {
      method: 'GET',
      headers: {
        headers,
        'Authorization': `Bearer ${token}`
      }
    })

    const response = await request.json();
    return response;
  }
  catch (err) {
    console.log(err);
  }
}

const select = document.querySelector('#companySelect');
async function selectCompany(input) {

  companyArr.forEach(company => {

    const sectorOption = document.createElement('option');
    sectorOption.innerText = company.name;
    sectorOption.value     = company.uuid;

    input.appendChild(sectorOption);

  });
}

function filterDepartmentByCompany(input) {

  input.addEventListener('change', async () => {

    const companyId = input.value;
    const filterArr = await getDepartmentsByCompany(token.token, companyId);

    if (filterArr) {
      renderDepartmentCards(departmentList, filterArr);
      crudCallFunction();
    }
  })
}

filterDepartmentByCompany(select, companyArr)

selectCompany(select);

export { getAllDepartments };