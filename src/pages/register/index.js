import { pageHref } from "../homePage/index.js";
<<<<<<< HEAD
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { registerUser } from "../../scripts/register.js";
=======
import { redirectHeaderBtn } from "../../scripts/redirect.js";
import { registerUser } from '../../scripts/register.js';
>>>>>>> develop

pageHref.homePage = '../../../index.html';
pageHref.login    = '../login/index.html';

redirectHeaderBtn(pageHref);

registerUser();