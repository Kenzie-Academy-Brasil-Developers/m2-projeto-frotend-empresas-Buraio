import { dynamicModal } from "../adminModal.js";
import { apiDeleteUser } from "../adminModalApi/deleteUser.js";
import { deleteModal } from "./deleteDepartment.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

export async function deleteUser() {

  setTimeout(() => {
    const deleteBtnArray = document.querySelectorAll('.deleteUser');
    deleteBtnArray.forEach(button => {
      button.addEventListener('click', () => {

        const parentId = button.parentElement.getAttribute('data-uuid');
        const modalContainer = dynamicModal();
        deleteModal(modalContainer);
        const modalBack = document.querySelector('.divBack');

        modalContainer.addEventListener('submit', (e) => {

          e.preventDefault();
          apiDeleteUser(validAdminToken, parentId);
          modalBack.remove();
        })
      })
    })
  }, 300)
};