import { dynamicModal } from "../adminModal.js";
import { apiEditDepartment } from "../adminModalApi/editDepartment.js";
import { getAllDepartments } from "../adminPage/adminDepartment.js";

const token = JSON.parse(localStorage.getItem('token'));

export async function updateDepartment() {

  setTimeout(() => {

    const editBtnArray = document.querySelectorAll('.editDepartment');
    editBtnArray.forEach(button => {

      const parentId = button.parentElement.getAttribute('data-uuid');
      
      button.addEventListener('click', async () => {

        const container = dynamicModal();
        editModal(container);

        const textarea = document.querySelector('#descriptionTextarea');
        const departmentArray = await getAllDepartments(token.token);

        departmentArray.forEach(department => {
          if (department.uuid === parentId) {
            textarea.innerText = department.description;
          }
        })

        const form = document.querySelector('.divContainer');
        form.addEventListener('submit', async (e) => {

          e.preventDefault();

          const data = {};
          data.description = textarea.value;

          apiEditDepartment(token.token, parentId, data);
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