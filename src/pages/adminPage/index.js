import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn, validateToken } from "../../scripts/homePage/redirect.js";
import { getUserData } from '../../scripts/adminPage/getAccount.js';
import { updateUser } from "../../scripts/adminModal/editUser.js";
import { crudCallFunction } from '../../scripts/adminModal.js'
import { adminCompanySelect, selectCompany } from "../../scripts/adminPage/adminDepartment.js";

const validAdminToken = validateToken();

redirectHeaderBtn(pageHref);

getUserData();

selectCompany(adminCompanySelect);

crudCallFunction();

updateUser();

export {validAdminToken};