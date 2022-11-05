import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { registerUser } from "../../scripts/register.js";

pageHref.homePage = '../../../index.html';
pageHref.login    = '../login/index.html';

redirectHeaderBtn(pageHref);

registerUser();