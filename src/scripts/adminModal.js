import { createDepartment } from './adminModal/createDepartment.js';
import { deleteDepartment } from './adminModal/deleteDepartment.js';
import { updateDepartment } from './adminModal/editDepartment.js';
import { readDepartment } from './adminModal/readDepartment.js';

async function crudCallFunction() {

  createDepartment();
  readDepartment();
  updateDepartment();
  deleteDepartment();

}

const dynamicModal = () => {

  const divBack       = document.createElement('div');
  const divContainer  = document.createElement('form');
  const closeModalBtn = document.createElement('img');

  divBack.classList.add('divBack');
  divContainer.classList.add('divContainer');
  closeModalBtn.classList.add('closeModal');

  closeModalBtn.src = '../../assets/icons/xIcon.svg'

  divContainer.appendChild(closeModalBtn);
  divBack.appendChild(divContainer);
  document.body.appendChild(divBack);

  closeModalBtn.addEventListener('click', () => {
    divBack.remove();
  })

  return divContainer;
}

export { dynamicModal, crudCallFunction };