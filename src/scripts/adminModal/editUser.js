import { dynamicModal } from "../adminModal.js";

export async function updateUser() {

  setTimeout(() => {

    const editBtnArray = document.querySelectorAll('.editUser');
    editBtnArray.forEach(button => {

      button.addEventListener('click', () => {
        const container = dynamicModal();
        updateModal(container);
      })
    })
  }, 300)
}

function updateModal(parent) {

  const modalHeading      = document.createElement('h3');
  const typeOfWork        = document.createElement('select');
  const noValueOptWorking = document.createElement('option');
  const userExpLevel      = document.createElement('select');
  const noValueOptUserExp = document.createElement('option');
  const submitBtn         = document.createElement('button');

  modalHeading.classList.add('modalHeading');
  typeOfWork.classList.add('inputData');
  userExpLevel.classList.add('inputData');
  submitBtn.classList.add('submitBtn', 'blueBtn');

  typeOfWork.id = 'typeSelect';
  userExpLevel.id  = 'expLevelSelect';

  noValueOptWorking.innerText = 'Selecionar modalidade de trabalho';
  noValueOptUserExp.innerText = 'Selecionar nível profissional';
  submitBtn.innerText         = 'Editar';

  typeOfWork.appendChild(noValueOptWorking);
  userExpLevel.appendChild(noValueOptUserExp);

  parent.append(modalHeading, typeOfWork, userExpLevel, submitBtn);

}
