import { getAllCompanies } from "../../scripts/homePage/homePageApi.js";
import { sectorSelect, renderCards } from "../../scripts/homePage/homePage.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";

const headers = { 'Content-Type': 'application/json' }
const companyArr = await getAllCompanies();
const pageHref = {
  login:    './src/pages/login/index.html',
  register: './src/pages/register/index.html',
  homePage: './index.html'
}

redirectHeaderBtn(pageHref);

renderCards(companyArr);

sectorSelect();

pageHref.homePage = '../../../index.html';

export { headers, pageHref, companyArr };