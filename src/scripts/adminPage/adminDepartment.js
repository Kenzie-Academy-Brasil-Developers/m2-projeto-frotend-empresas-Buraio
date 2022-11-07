import { baseUrl } from "../homePage/homePageApi.js";
import { headers, companyArr } from '../../pages/homePage/index.js'
import { renderDepartmentCards } from './getAccount.js';
import { crudCallFunction } from "../adminModal.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

function selectCompany(input) {

  companyArr.forEach(company => {

    const sectorOption = document.createElement('option');
    sectorOption.innerText = company.name;
    sectorOption.value     = company.uuid;

    input.appendChild(sectorOption);
  });
  filterDepartmentByCompany(input, companyArr)
}

const getAllDepartments = async (token) => {

  const request = await fetch(`${baseUrl}/departments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

const getDepartmentsByCompany = async (token, id) => {

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

const filterDepartmentByCompany = (input) => {

  input.addEventListener('change', async () => {

    const companyId = input.value;
    const filterArr = await getDepartmentsByCompany(validAdminToken, companyId);

    if (filterArr) {
      renderDepartmentCards(filterArr);
      crudCallFunction();
    }
  })
}

export { getAllDepartments, filterDepartmentByCompany, selectCompany };