import { dynamicModal } from "../adminModal.js";
import { apiCreate } from "../adminModalApi/createDepartment.js";
import { selectCompany } from "../adminPage/adminDepartment.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

async function createDepartment() {

  const createNewDepartmentBtn = document.querySelector('.newDepartment');
  createNewDepartmentBtn.addEventListener('click', () => {

    const modalContainer = dynamicModal();
    createModal(modalContainer);

    const modalCompanySelect = document.querySelector('#modalSelect');
    selectCompany(modalCompanySelect);

    modalContainer.addEventListener('submit', (e) => {

      e.preventDefault();

      const departmentName = document.querySelector('#departmentName');
      const departmentDesc = document.querySelector('#departmentDesc');

      const userData = {
        "name"         : `${departmentName.value}`,
        "description"  : `${departmentDesc.value}`,
        "company_uuid" : `${modalCompanySelect.value}`
      };

      apiCreate(validAdminToken, userData);
      removeModal(modalContainer);
    })
  })
}

const createModal = (parent) => {

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

const removeModal = (container) => {

  const modalBack = document.querySelector('.divBack');
  setTimeout(() => {
    container.remove()
    modalBack.classList.add('hidden');
  }, 500);
};

export { createDepartment, removeModal };