import { dynamicModal } from "../adminModal.js";
import { apiDelete } from "../adminModalApi/deleteDepartment.js";
import { token } from "../adminPage/getAccount.js";

export async function deleteDepartment() {

  setTimeout(() => {
    const deleteBtnArray = document.querySelectorAll('.deleteDepartment');
    deleteBtnArray.forEach(button => {
      button.addEventListener('click', () => {

        const parentId = button.parentElement.getAttribute('data-uuid');
        console.log(parentId)

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

  cautionHeading.innerText = 'Deseja realmente deletar o departamento NOME e deletar seus funcionários?'
  confirmBtn.innerText     = 'Confirmar'

  parent.append(cautionHeading, confirmBtn);

}
