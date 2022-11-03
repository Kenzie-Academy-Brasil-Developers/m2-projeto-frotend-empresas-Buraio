import { dynamicModal } from "../adminModal.js";

export async function editDepartment() {

  setTimeout(() => {

    const editBtnArray = document.querySelectorAll('.editDepartment');
    console.log(editBtnArray)

    editBtnArray.forEach(button => {

      button.addEventListener('click', () => {

        const container = dynamicModal();
        editModal(container);

      })
    })
  }, 300)
}

function editModal(parent) {

  const modalHeading = document.createElement('h3');
  const departmentDesc = document.createElement('textarea');
  const submitBtn = document.createElement('button');

  modalHeading.classList.add('modalHeading');
  departmentDesc.classList.add('departmentDesc');
  submitBtn.classList.add('submitBtn', 'blueBtn');

  modalHeading.innerText = 'Editar Departamento';
  // departmentDesc.value = '' API
  submitBtn.innerText    = 'Salvar alterações';

  parent.append(modalHeading, departmentDesc, submitBtn);

}