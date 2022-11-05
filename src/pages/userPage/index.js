import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";
import { getUserInfo, userInfo } from "../../scripts/userPage/userInfo.js";

pageHref.homePage = '../../../index.html';

redirectHeaderBtn(pageHref);

getUserInfo();

userInfo();