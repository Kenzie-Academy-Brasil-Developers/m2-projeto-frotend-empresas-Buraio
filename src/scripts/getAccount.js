import { getAllDepartments } from './adminDepartmentApi.js';
import { getAllUsers } from './adminUsersApi.js';

const token = JSON.parse(localStorage.getItem('token'));
async function getUserData() {

  const userList = document.querySelector('#userList');
  const departmentList = document.querySelector('#departments');
  if (token) {
    const userArr = await getAllUsers(token.token)
    const departmentArr = await getAllDepartments(token.token);
    renderUserCards(userList, userArr);
    renderDepartmentCards(departmentList, departmentArr);
  }
}

function adminUserCards(obj) {

  if (obj.username !== 'ADMIN') {

    const userCard         = document.createElement('li');
    const userName         = document.createElement('h3');
    const userExpLevel     = document.createElement('p');
    const companyName      = document.createElement('p');
    const actionsDiv       = document.createElement('div');
    const actionIconPencil = document.createElement('img');
    const actionIconTrash  = document.createElement('img');

    userCard.setAttribute('data-uuid', obj.uuid);

    userCard.classList.add('user');
    userName.classList.add('userName');
    userExpLevel.classList.add('userExp');
    companyName.classList.add('companyName');
    actionsDiv.classList.add('actionsDiv');
    actionIconPencil.classList.add('action');
    actionIconTrash.classList.add('action');

    userName.innerText = obj.username;
    userExpLevel.innerText = obj.professional_level;
    // companyName.innerText = obj.

    actionIconPencil.src = '../../assets/icons/blackPencilIcon.svg';
    actionIconTrash.src = '../../assets/icons/trashbinIcon.svg';

    actionsDiv.append(actionIconPencil, actionIconTrash);
    userCard.append(userName, userExpLevel, companyName, actionsDiv);

    return userCard;
  }
}

function renderUserCards(list, arr) {

  list.innerHTML = '';
  arr.forEach(card => {

    const item = adminUserCards(card);
    if (item) {
      list.append(item);
    }
  });
}

function departmentCard(obj) {

  const card             = document.createElement('li');
  const departmentName   = document.createElement('h3');
  const departmentDesc   = document.createElement('p');
  const companyName      = document.createElement('p');
  const actionsDiv       = document.createElement('div');
  const actionIconEye    = document.createElement('img');
  const actionIconPencil = document.createElement('img');
  const actionIconTrash  = document.createElement('img');

  card.setAttribute('data-uuid', obj.uuid);

  card.classList.add('department');
  departmentName.classList.add('departmentName');
  departmentDesc.classList.add('departmentDesc');
  companyName.classList.add('companyName');
  actionsDiv.classList.add('actionsDiv');
  actionIconEye.classList.add('action');
  actionIconPencil.classList.add('action');
  actionIconTrash.classList.add('action');

  departmentName.innerText = obj.name;
  departmentDesc.innerText = obj.description;
  companyName.innerText    = obj.companies.name;

  actionIconEye.src    = '../../assets/icons/eyeIcon.svg';
  actionIconPencil.src = '../../assets/icons/blackPencilIcon.svg';
  actionIconTrash.src  = '../../assets/icons/trashbinIcon.svg';

  actionsDiv.append(actionIconEye, actionIconPencil, actionIconTrash);
  card.append(departmentName, departmentDesc, companyName, actionsDiv);

  return card;
}

function renderDepartmentCards(list, arr) {

  list.innerHTML = '';
  arr.forEach(department => {

    const card = departmentCard(department);
    if (card) {
      list.append(card);
    }
  })
}

// departmentCard();

export { getUserData };