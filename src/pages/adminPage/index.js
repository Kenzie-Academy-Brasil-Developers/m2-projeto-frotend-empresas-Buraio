import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { getUserData } from '../../scripts/adminPage/getAccount.js';
import { crudCallFunction } from '../../scripts/adminModal.js'

pageHref.homePage = '../../../index.html';

redirectHeaderBtn(pageHref);

getUserData();

crudCallFunction();