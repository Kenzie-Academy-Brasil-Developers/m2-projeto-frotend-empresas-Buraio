import { validAdminToken } from "../../pages/adminPage/index.js";
import { dynamicModal } from "../adminModal.js";
import { apiEditDepartment } from "../adminModalApi/editDepartment.js";
import { getAllDepartments } from "../adminPage/adminDepartment.js";

export async function updateDepartment() {

  setTimeout(() => {

    const editBtnArray = document.querySelectorAll('.editDepartment');
    editBtnArray.forEach(button => {

      const parentId = button.parentElement.getAttribute('data-uuid');
      
      button.addEventListener('click', async () => {

        const modalContainer = dynamicModal();
        editModal(modalContainer);
        const modalBack = document.querySelector('.divBack')

        const textarea = document.querySelector('#descriptionTextarea');
        const departmentArray = await getAllDepartments(validAdminToken);

        departmentArray.forEach(department => {
          if (department.uuid === parentId) {
            textarea.innerText = department.description;
          }
        })

        modalContainer.addEventListener('submit', async (e) => {

          e.preventDefault();

          const data = {};
          data.description = textarea.value;

          apiEditDepartment(validAdminToken, parentId, data);

          modalBack.remove();
        })
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

  departmentDesc.id = 'descriptionTextarea';

  modalHeading.innerText = 'Editar Departamento';
  submitBtn.innerText    = 'Salvar alterações';

  parent.append(modalHeading, departmentDesc, submitBtn);

}