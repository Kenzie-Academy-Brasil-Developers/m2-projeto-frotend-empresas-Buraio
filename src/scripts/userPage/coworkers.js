import { loggedUserDepartment } from "./getApi.js";
import { coworkersArray } from "../../pages/userPage/index.js";
import { validUserToken, loggedUser } from "../../pages/userPage/index.js";

async function renderCoworkers() {

  const userProfileCompanyHeader = document.querySelector('.companyHeader');
  const coworkerList = document.querySelector('#coworkerList');

  const departmentUuid    = loggedUser.department_uuid;
  const currentDepartment = await loggedUserDepartment(validUserToken);
  coworkersArray.forEach(department => {

    if (departmentUuid === department.uuid) {

      userProfileCompanyHeader.innerText = `${currentDepartment.name} - ${department.name}`;

      department.users.forEach(user => {
        const coworkerCard = createCoworkerCard(user);
        coworkerList.appendChild(coworkerCard);
      })
    }
  });
}

const createCoworkerCard = (userObj) => {

  const userContainer = document.createElement('li');
  const userNameHeading = document.createElement('h3');
  const userExpLevel    = document.createElement('span');

  userNameHeading.innerText = userObj.username;
  userExpLevel.innerText = userObj.professional_level;

  userContainer.append(userNameHeading, userExpLevel);

  return userContainer;

}

export { renderCoworkers };