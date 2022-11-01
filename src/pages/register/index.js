import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/redirect.js";

pageHref.homePage = '../../../index.html';
pageHref.login    = '../login/index.html';

redirectHeaderBtn(pageHref);