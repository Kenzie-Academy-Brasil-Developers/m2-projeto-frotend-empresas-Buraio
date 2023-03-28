import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { loginUser } from '../../scripts/login.js';

pageHref.register = '../register/index.html';

redirectHeaderBtn(pageHref);

loginUser();