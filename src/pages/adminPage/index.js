import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn, validateToken } from "../../scripts/homePage/redirect.js";
import { getUserData } from '../../scripts/adminPage/getAccount.js';
import { updateUser } from "../../scripts/adminModal/editUser.js";
import { crudCallFunction } from '../../scripts/adminModal.js'
import { selectCompany } from "../../scripts/adminPage/adminDepartment.js";
import { deleteUser } from "../../scripts/adminModal/deleteUser.js";

const validAdminToken = validateToken();
const adminCompanySelect = document.querySelector('#adminCompanySelect');
const userList       = document.querySelector('#userList');
const departmentList = document.querySelector('#departments');

redirectHeaderBtn(pageHref);

selectCompany(adminCompanySelect);

getUserData();

crudCallFunction();

updateUser();

deleteUser();

export {validAdminToken, adminCompanySelect, userList, departmentList};