import { dynamicModal } from "../adminModal.js";
import { apiDeleteUser } from "../adminModalApi/deleteUser.js";
import { token } from "../adminPage/getAccount.js";
import { deleteModal } from "./deleteDepartment.js";

export async function deleteDepartment() {

  setTimeout(() => {
    const deleteBtnArray = document.querySelectorAll('.deleteUser');
    deleteBtnArray.forEach(button => {
      button.addEventListener('click', () => {

        const parentId = button.parentElement.getAttribute('data-uuid');
        console.log(parentId)

        const container = dynamicModal();
        deleteModal(container);

        const submitBtn = document.querySelector('.submitBtn');
        const modalBack = document.querySelector('.divBack');

        submitBtn.addEventListener('click', () => {
          apiDeleteUser(token.token, parentId);
          modalBack.remove();
        })
      })
    })
  }, 300)
}

deleteDepartment()