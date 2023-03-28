import { dynamicModal } from "../adminModal.js";
import { getOutOfWorkApi } from "../adminModalApi/readDepartment.js";
import { validAdminToken } from "../../pages/adminPage/index.js";
import { removeModal } from "./createDepartment.js";
import { getAllDepartments } from "../adminPage/adminDepartment.js";
import { getAllUsers } from "../adminPage/adminUsers.js";
import { listDepartmentUsers } from "../adminReadModal/dismissUser.js";
import { hireUser } from "../adminReadModal/hireUser.js";

export const readDepartment = async () => {

  setTimeout(() => {
    const readBtnArray = document.querySelectorAll('.visualize')
    readBtnArray.forEach(button => {
  
      button.addEventListener('click', async () => {

        const parentId = button.parentElement.getAttribute('data-uuid');

        const modalContainer = dynamicModal();
        const returnUserSelect = readModal(modalContainer, parentId);

        const departmentArray = await getAllDepartments(validAdminToken)

        departmentArray.forEach(department => {

          if (department.uuid === parentId) {
            renderDepartmentInfo(department);
          }
        })

        outOfWorkUsers(returnUserSelect);

        const userList = document.querySelector('#modalUserList');
        const allUserArray = await getAllUsers(validAdminToken);

        allUserArray.forEach(user => {

          if (user.department_uuid) {
            if (user.department_uuid === parentId) {
              listDepartmentUsers(userList, user)
            }
          }

        })

        modalContainer.addEventListener('submit', async (e) => {

          e.preventDefault();
          removeModal(modalContainer);
        })
      })
    })
  }, 300)
}

const readModal = (parent, parentId) => {

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
  departmentDesc.classList.add('modalDesc');
  companyName.classList.add('modalCompanyName');
  inputDiv.classList.add('inputDiv');
  userSelect.classList.add('inputData')
  hireBtn.classList.add('submitBtn', 'greenBtn');

  userSelect.id = 'userSelect';
  userList.id   = 'modalUserList';

  noValueOpt.innerText = 'Selecionar usuário';
  hireBtn.innerText = 'Contratar';

  infoDiv.append(departmentDesc, companyName);
  userSelect.appendChild(noValueOpt);
  inputDiv.append(userSelect, hireBtn);

  parent.append(departmentName, infoDiv, inputDiv, userList);

  hireBtn.addEventListener('click', () => {

    const hireUserBody = {};
    hireUserBody.user_uuid = userSelect.value;
    hireUserBody.department_uuid = parentId;

    hireUser(validAdminToken, hireUserBody);
  })
  return userSelect;
}

const outOfWorkUsers = async (element) => {

  const outOfWorkUserArray = await getOutOfWorkApi(validAdminToken);
  outOfWorkUserArray.forEach(user => {

    const userOption = document.createElement('option');
    userOption.innerText = user.username;
    userOption.value     = user.uuid;
    element.appendChild(userOption);

  })
}

const renderDepartmentInfo = (obj) => {

  const modalHeading = document.querySelector('.modalHeading');
  const modalDesc    = document.querySelector('.modalDesc');
  const modalCompanyName = document.querySelector('.modalCompanyName');

  modalHeading.innerText     = obj.name;
  modalDesc.innerText        = obj.description;
  modalCompanyName.innerText = obj.companies.name;

}
