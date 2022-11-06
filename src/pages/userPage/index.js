import { pageHref } from "../homePage/index.js";
import { redirectHeaderBtn, validateToken } from "../../scripts/homePage/redirect.js";
import { getUserInfo, userInfo } from "../../scripts/userPage/userInfo.js";
import { renderCoworkers } from "../../scripts/userPage/coworkers.js";
import { apiUserProfile } from "../../scripts/userPage/getApi.js";
import { getCoworkers } from "../../scripts/userPage/getApi.js";

const validUserToken = validateToken();
const loggedUser     = await apiUserProfile(validUserToken);
const coworkersArray    = await getCoworkers(validUserToken);

redirectHeaderBtn(pageHref);

getUserInfo();

userInfo();

renderCoworkers();

export { validUserToken, loggedUser, coworkersArray };