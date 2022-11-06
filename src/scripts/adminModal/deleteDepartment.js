import { dynamicModal } from "../adminModal.js";
import { apiDelete } from "../adminModalApi/deleteDepartment.js";
import { getAllDepartments } from "../adminPage/adminDepartment.js";
import { validAdminToken } from "../../pages/adminPage/index.js";
import { removeModal } from "./createDepartment.js";

async function deleteDepartment() {

  setTimeout(() => {

    const deleteBtnArray = document.querySelectorAll('.deleteDepartment');
    deleteBtnArray.forEach(button => {

      button.addEventListener('click', () => {

        const parentId = button.parentElement.getAttribute('data-uuid');
        const modalContainer = dynamicModal();
        deleteModal(modalContainer);

        identifyDepartment(parentId);

        modalContainer.addEventListener('submit', (e) => {

          e.preventDefault();

          apiDelete(validAdminToken, parentId);
          removeModal(modalContainer);
        })
      })
    })
  }, 300)
}

function deleteModal(parent) {

  const cautionHeading = document.createElement('h3');
  const confirmBtn     = document.createElement('button');

  cautionHeading.classList.add('modalHeading', 'deleteHeading');
  confirmBtn.classList.add('submitBtn', 'greenBtn');

  const text = `Deseja realmente deletar o departamento <span class="nameSpan">NOME</span> e deletar seus funcionários?`

  cautionHeading.insertAdjacentHTML('beforeend', text);
  confirmBtn.innerText     = 'Confirmar'

  parent.append(cautionHeading, confirmBtn);

}

async function identifyDepartment(id) {

  const departmentName = document.querySelector('.nameSpan');
  const departmentArray = await getAllDepartments(validAdminToken);

  departmentArray.forEach(department => {

    if (department.id === id) {
      departmentName.innerText = department.name;
    }
  })
}

export { deleteDepartment, deleteModal }