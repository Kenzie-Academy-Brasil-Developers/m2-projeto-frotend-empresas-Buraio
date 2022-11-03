import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/redirect.js";
import { getUserData } from '../../scripts/getAccount.js';

pageHref.homePage = '../../../index.html';

redirectHeaderBtn(pageHref);

getUserData();