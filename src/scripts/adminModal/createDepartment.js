import { dynamicModal } from "../adminModal.js";
import { apiCreate } from "../adminModalApi/createDepartment.js";
import { selectCompany } from "../adminPage/adminDepartment.js";
import { token } from "../adminPage/getAccount.js";

export async function createDepartment() {

  const createBtn = document.querySelector('.newDepartment');
  createBtn.addEventListener('click', () => {

    const container = dynamicModal();
    createModal(container);

    const form = document.querySelector('.divContainer');
    const modalBack = document.querySelector('.divBack');

    const select = document.querySelector('#modalSelect');
    selectCompany(select);

    form.addEventListener('submit', (e) => {

      e.preventDefault();

      const name = document.querySelector('#departmentName');
      const description = document.querySelector('#departmentDesc');

      const userData = {
        "name"         : `${name.value}`,
        "description"  : `${description.value}`,
        "company_uuid" : `${select.value}`
      };

      console.log(userData)

      apiCreate(token.token, userData);

      modalBack.remove();

    })
  })
}

function createModal(parent) {

  const modalHeading      = document.createElement('h3');
  const departmentName    = document.createElement('input');
  const departmentDesc    = document.createElement('input');
  const departmentCompany = document.createElement('select');
  const submitBtn         = document.createElement('button');
  const noValueOpt        = document.createElement('option');

  modalHeading.classList.add('modalHeading');
  departmentName.classList.add('inputData');
  departmentDesc.classList.add('inputData');
  departmentCompany.classList.add('inputData');
  submitBtn.classList.add('submitBtn', 'blueBtn');

  departmentName.id    = 'departmentName';
  departmentDesc.id    = 'departmentDesc';
  departmentCompany.id = 'modalSelect';

  modalHeading.innerText     = 'Criar departamento';
  departmentName.placeholder = 'Nome do departamento';
  departmentDesc.placeholder = 'Descrição';
  noValueOpt.innerText       = 'selecionar empresa';
  submitBtn.innerText        = 'Criar departamento';

  noValueOpt.selected = true;

  departmentCompany.appendChild(noValueOpt);
  parent.append(modalHeading, departmentName, departmentDesc, departmentCompany, submitBtn);

}