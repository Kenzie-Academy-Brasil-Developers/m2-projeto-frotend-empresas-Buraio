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

  const divBack       = document.querySelector('.divBack');
  const divContainer  = document.createElement('form');
  const closeModalBtn = document.createElement('img');

  divBack.classList.remove('hidden');
  divContainer.classList.add('divContainer');
  closeModalBtn.classList.add('closeModal');

  closeModalBtn.src = '../../assets/icons/xIcon.svg'

  divContainer.appendChild(closeModalBtn);
  divBack.appendChild(divContainer);

  closeModalBtn.addEventListener('click', () => {
    divContainer.remove();
    divBack.classList.add('hidden');
  })

  return divContainer;
}

export { dynamicModal, crudCallFunction };