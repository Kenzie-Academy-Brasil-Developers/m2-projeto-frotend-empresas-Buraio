function dynamicModal() {

  const divBack       = document.createElement('div');
  const divContainer  = document.createElement('div');
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
}

export { dynamicModal };