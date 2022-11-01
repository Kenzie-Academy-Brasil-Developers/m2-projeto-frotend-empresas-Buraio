import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/redirect.js";

pageHref.register = '../register/index.html';
pageHref.homePage = '../../../index.html';

redirectHeaderBtn(pageHref);