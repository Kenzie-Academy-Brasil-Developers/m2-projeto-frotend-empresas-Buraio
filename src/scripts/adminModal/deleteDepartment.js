import { dynamicModal } from "../adminModal.js";
import { apiDelete } from "../adminModalApi/deleteDepartment.js";
import { getAllDepartments } from "../adminPage/adminDepartment.js";
import { token } from "../adminPage/getAccount.js";

export async function deleteDepartment() {

  setTimeout(() => {
    const deleteBtnArray = document.querySelectorAll('.deleteDepartment');
    deleteBtnArray.forEach(button => {
      button.addEventListener('click', () => {

        const parentId = button.parentElement.getAttribute('data-uuid');
        console.log(parentId)

        identifyDepartment(parentId);

        const container = dynamicModal();
        deleteModal(container);

        const submitBtn = document.querySelector('.submitBtn');
        const modalBack = document.querySelector('.divBack');

        submitBtn.addEventListener('click', () => {
          apiDelete(token.token, parentId);
          modalBack.remove();
        })
      })
    })
  }, 300)
}

export function deleteModal(parent) {

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
  console.log(departmentName)
  const departmentArray = await getAllDepartments(JSON.parse(localStorage.getItem('token')).token);
  console.log(departmentArray)
  departmentArray.forEach(department => {

    if (department.id === id) {
      departmentName.innerText = department.name;
    }
  })
}
