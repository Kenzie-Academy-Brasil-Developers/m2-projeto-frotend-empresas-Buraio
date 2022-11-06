import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { registerUser } from "../../scripts/register.js";

pageHref.login    = '../login/index.html';

redirectHeaderBtn(pageHref);

registerUser();