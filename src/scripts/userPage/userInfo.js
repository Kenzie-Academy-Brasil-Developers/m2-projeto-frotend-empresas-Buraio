import { apiUserProfile, editUserProfile, getCoworkers, loggedUserDepartment } from "./getApi.js";
import { dynamicModal } from "../adminModal.js";
import { apiEditUser } from "../adminModalApi/editUser.js";

const token = JSON.parse(localStorage.getItem('token')).token;
const loggedUser = await apiUserProfile(token);

const userInfo = () => {

  const editUserInfoBtn = document.querySelector('.editInfoBtn');

  editUserInfoBtn.addEventListener('click', async () => {

    const modalContainer = dynamicModal();
    editUserModal(modalContainer)

    const [ userNameEditInput, emailEditInput, passwordEditInput ] = document.querySelectorAll('.inputData');
    modalContainer.addEventListener('submit', (e) => {

      e.preventDefault();

      const userDataBody = {};
      userDataBody.username = userNameEditInput.value;
      userDataBody.email    = emailEditInput.value;
      userDataBody.password = `${passwordEditInput.value}`;

      console.log(userDataBody);

      editUserProfile(token, userDataBody);

      getUserInfo();

      setTimeout(() => {
        modalContainer.remove();
      }, 500)
    })
  })
}

const editUserModal = (container) => {

  const modalHeading        = document.createElement('h3');
  const updateNameInput     = document.createElement('input');
  const updateEmailInput    = document.createElement('input');
  const updatePasswordInput = document.createElement('input');
  const submitDataBtn       = document.createElement('button');

  modalHeading.classList.add('modalHeading');
  updateNameInput.classList.add('inputData');
  updateEmailInput.classList.add('inputData');
  updatePasswordInput.classList.add('inputData');
  submitDataBtn.classList.add('submitBtn', 'blueBtn');

  modalHeading.innerText          = 'Editar Perfil';
  updateNameInput.placeholder     = 'Seu nome';
  updateEmailInput.placeholder    = 'Seu e-mail';
  updatePasswordInput.placeholder = 'Sua senha';
  submitDataBtn.innerText         = 'Salvar alterações';

  updateEmailInput.type    = 'email';
  updatePasswordInput.type = 'password';

  updateEmailInput.required    = true;
  updatePasswordInput.required = true;

  container.append(modalHeading, updateNameInput, updateEmailInput, updatePasswordInput, submitDataBtn);

}

async function getUserInfo() {

  const userNameHeading = document.querySelector('.userName');
  const userEmailSpan   = document.querySelector('.userEmail');
  const userExpSpan     = document.querySelector('.userExp');
  const workingType     = document.querySelector('.workingType');


  userNameHeading.innerText = loggedUser.username;
  userEmailSpan.innerText   = loggedUser.email;

  const expIsTrue = !!loggedUser.professional_level;
  const workingTypeIsTrue = !!loggedUser.kind_of_work;

  if (expIsTrue) {
    userExpSpan.innerText     = loggedUser.professional_level;
  }
  if (workingTypeIsTrue) {
    workingType.innerText     = loggedUser.kind_of_work;
  }
}

async function renderCoworkers() {

  const userProfileCompanyHeader = document.querySelector('.companyHeader');
  const coworkerList = document.querySelector('#coworkerList');

  const departmentUuid    = loggedUser.department_uuid;
  const currentDepartment = await loggedUserDepartment(token);

  const coworkersArray    = await getCoworkers(token);
  coworkersArray.forEach(department => {

    if (departmentUuid === department.uuid) {

      userProfileCompanyHeader.innerText = `${currentDepartment.name} - ${department.name}`;

      department.users.forEach(user => {

        const userContainer = document.createElement('li');
        const userNameHeading = document.createElement('h3');
        const userExpLevel    = document.createElement('span');

        userNameHeading.innerText = user.username;
        userExpLevel.innerText = user.professional_level;

        userContainer.append(userNameHeading, userExpLevel);
        coworkerList.appendChild(userContainer);

      })
    }
  });
}

renderCoworkers();

export { getUserInfo, userInfo };