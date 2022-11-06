import { dynamicModal } from "../adminModal.js";
import { getOutOfWorkApi } from "../adminModalApi/readDepartment.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

export const readDepartment = async () => {

  setTimeout(() => {
    const readBtnArray = document.querySelectorAll('.visualize')
    readBtnArray.forEach(button => {
  
      button.addEventListener('click', () => {
  
        const container = dynamicModal();
        const returnUserSelect = readModal(container);

        outOfWorkUsers(returnUserSelect);

      })
    })
  }, 300)
}

const readModal = (parent) => {

  const departmentName = document.createElement('h3');
  const infoDiv        = document.createElement('div');
  const departmentDesc = document.createElement('p');
  const companyName    = document.createElement('p');
  const inputDiv       = document.createElement('div');
  const userSelect     = document.createElement('select');
  const noValueOpt     = document.createElement('option');
  const hireBtn        = document.createElement('button');
  const userList       = document.createElement('ul');

  departmentName.classList.add('modalHeading', 'departmentName');
  infoDiv.classList.add('infoDiv');
  departmentDesc.classList.add('departmentDesc');
  companyName.classList.add('companyName');
  inputDiv.classList.add('inputDiv');
  userSelect.classList.add('inputData')
  hireBtn.classList.add('submitBtn', 'greenBtn');

  userSelect.id = 'userSelect';
  userList.id   = 'userList';

  noValueOpt.innerText = 'Selecionar usuário';
  hireBtn.innerText = 'Contratar';

  infoDiv.append(departmentDesc, companyName);
  userSelect.appendChild(noValueOpt);
  inputDiv.append(userSelect, hireBtn);

  parent.append(departmentName, infoDiv, inputDiv, userList);

  return userSelect;

}

const outOfWorkUsers = async (element) => {

  const outOfWorkUserArray = await getOutOfWorkApi(validAdminToken);
  outOfWorkUserArray.forEach(user => {

    const userOption = document.createElement('option');
    userOption.innerText = user.username;
    element.appendChild(userOption);

  })
}