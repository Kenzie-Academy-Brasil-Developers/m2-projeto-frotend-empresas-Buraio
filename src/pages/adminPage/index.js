import { companyArr, pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { getUserData } from '../../scripts/adminPage/getAccount.js';
import { updateUser } from "../../scripts/adminModal/editUser.js";
import { crudCallFunction } from '../../scripts/adminModal.js'
import { filterCompaniesBySector } from "../../scripts/homePage/homePage.js";
import { select, selectCompany } from "../../scripts/adminPage/adminDepartment.js";

pageHref.homePage = '../../../index.html';

redirectHeaderBtn(pageHref);

getUserData();

filterCompaniesBySector(select, companyArr);

selectCompany(select);

crudCallFunction();

updateUser();