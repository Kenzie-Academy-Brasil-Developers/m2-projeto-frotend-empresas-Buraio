import { dynamicModal } from "../adminModal.js";

export async function deleteDepartment() {

  setTimeout(() => {
    const deleteBtnArray = document.querySelectorAll('.deleteDepartment');
    deleteBtnArray.forEach(button => {
      button.addEventListener('click', () => {

        const container = dynamicModal();
        deleteModal(container);
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
