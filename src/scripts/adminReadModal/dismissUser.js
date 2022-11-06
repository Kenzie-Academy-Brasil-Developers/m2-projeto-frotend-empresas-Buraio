import { baseUrl } from "../homePage/homePageApi.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

const dismissUserFromDepartment = async (token, id) => {

  const request = await fetch(`${baseUrl}/departments/dismiss/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const response = await request.json();
  return response;
}

const listDepartmentUsers = async (parent, obj) => {

  const userCard    = document.createElement('li');
  const userName    = document.createElement('h3');
  const expLevel    = document.createElement('p');
  const userCompany = document.createElement('p');
  const dismissBtn  = document.createElement('button');

  dismissBtn.classList.add('submitBtn', 'redBtn');

  userName.innerText    = obj.username;
  expLevel.innerText    = obj.professional_level;
  dismissBtn.innerText  = 'Desligar';

  userCard.append(userName, expLevel, userCompany, dismissBtn);

  parent.appendChild(userCard);

  dismissBtn.addEventListener('click', async () => {
    await dismissUserFromDepartment(validAdminToken, obj.uuid);
  })
}

export { listDepartmentUsers };