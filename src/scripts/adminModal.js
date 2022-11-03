import { newDepartment } from './adminModal/createDepartment.js';
import { deleteDepartment } from './adminModal/deleteDepartment.js';
import { editDepartment } from './adminModal/editDepartment.js';
import { readDepartment } from './adminModal/readDepartment.js';

function dynamicModal() {

  const divBack       = document.createElement('div');
  const divContainer  = document.createElement('form');
  const closeModalBtn = document.createElement('img');

  divBack.classList.add('divBack');
  divContainer.classList.add('divContainer');
  closeModalBtn.classList.add('closeModal');

  divContainer.appendChild(closeModalBtn);
  divBack.appendChild(divContainer);
  document.body.appendChild(divBack);

  closeModalBtn.src = '../../assets/icons/xIcon.svg'

  closeModalBtn.addEventListener('click', () => {
    divContainer.innerHTML = '';
    divBack.classList.add('hidden');
  })

  return divContainer;
}

async function crudCallFunction() {

  newDepartment();

  readDepartment();

  editDepartment();

  deleteDepartment();

}

export { dynamicModal, crudCallFunction };