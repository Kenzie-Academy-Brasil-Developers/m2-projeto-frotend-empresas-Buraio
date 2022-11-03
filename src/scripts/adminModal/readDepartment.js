import { dynamicModal } from "../adminModal.js";

export async function readDepartment() {

  setTimeout(() => {
    const readBtnArray = document.querySelectorAll('.visualize')
    readBtnArray.forEach(button => {
  
      button.addEventListener('click', () => {
  
        const container = dynamicModal();
        readModal(container);
      })
    })
  }, 300)
}

function readModal(parent) {

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
  hireBtn.classList.add('submitBtn', 'greenBtn');

  userSelect.id = 'userSelect';
  userList.id   = 'userList';

  // departmentName.innerText = '' API
  // departmentDesc.innerText = '' API
  // companyName.innerText = '' API
  noValueOpt.innerText = 'Selecionar usuário';
  hireBtn.innerText = 'Contratar';


  infoDiv.append(departmentDesc, companyName);
  userSelect.appendChild(noValueOpt);
  inputDiv.append(userSelect, hireBtn);

  parent.append(departmentName, infoDiv, inputDiv, userList);

}