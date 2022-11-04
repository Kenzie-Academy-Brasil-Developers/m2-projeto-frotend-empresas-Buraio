import { dynamicModal } from "../adminModal.js";

export async function createDepartment() {

  const createBtn = document.querySelector('.newDepartment');
  createBtn.addEventListener('click', () => {

    const container = dynamicModal();
    createModal(container);
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

  modalHeading.innerText     = 'Criar departamento';
  departmentName.placeholder = 'Nome do departamento';
  departmentDesc.placeholder = 'Descrição';
  noValueOpt.innerText       = 'selecionar empresa';
  submitBtn.innerText        = 'Criar departamento';

  noValueOpt.selected = true;

  departmentCompany.appendChild(noValueOpt);
  parent.append(modalHeading, departmentName, departmentDesc, departmentCompany, submitBtn);

}