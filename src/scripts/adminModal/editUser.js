import { dynamicModal } from "../adminModal.js";
import { apiEditUser } from "../adminModalApi/editUser.js";
import { validAdminToken } from "../../pages/adminPage/index.js";

export async function updateUser() {

  setTimeout(() => {

    const editBtnArray = document.querySelectorAll('.editUser');
    editBtnArray.forEach(button => {

      button.addEventListener('click', () => {

        const modalContainer = dynamicModal();
        updateModal(modalContainer);
        const modalBack = document.querySelector('.divBack');

        const typeSelect = document.querySelector('#typeSelect');
        const expLevelSelect = document.querySelector('#expLevelSelect');
        const parentId = button.parentElement.getAttribute('data-uuid');

        modalContainer.addEventListener('submit', (e) => {

          e.preventDefault();

          const userData = {};
          userData.kind_of_work = typeSelect.value;
          userData.professional_level = expLevelSelect.value;

          apiEditUser(validAdminToken, parentId, userData);

          modalBack.remove();
        })
      })
    })
  }, 300)
}

function updateModal(parent) {

  const modalHeading      = document.createElement('h3');
  const typeOfWork        = document.createElement('select');
  const userExpLevel      = document.createElement('select');
  const submitBtn         = document.createElement('button');

  modalHeading.classList.add('modalHeading');
  typeOfWork.classList.add('inputData');
  userExpLevel.classList.add('inputData');
  submitBtn.classList.add('submitBtn', 'blueBtn');

  typeOfWork.id = 'typeSelect';
  userExpLevel.id  = 'expLevelSelect';

  submitBtn.innerText = 'Editar';

  typeOfWork.insertAdjacentHTML('beforeend', `
    <option value='' selected>Selecionar modalidade de trabalho</option>
    <option value='presencial'>Presencial</option>
    <option value='home office'>Home-Office</option>
    <option value='hibrido'>Híbrido</option>
  `)

  userExpLevel.insertAdjacentHTML('beforeend', `
    <option value="" selected>Nível Profissional</option>
    <option value="estágio">Estágio</option>
    <option value="júnior">Júnior</option>
    <option value="pleno">Pleno</option>
    <option value="sênior">Sênior</option>
  `)

  parent.append(modalHeading, typeOfWork, userExpLevel, submitBtn);

}
