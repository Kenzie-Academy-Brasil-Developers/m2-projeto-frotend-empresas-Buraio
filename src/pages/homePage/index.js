import { getAllCompanies } from "../../scripts/homePage/homePageApi.js";
import { sectorSelect, renderCards, filterCompaniesBySector } from "../../scripts/homePage/homePage.js";
import { redirectHeaderBtn } from "../../scripts/homePage/redirect.js";

const headers = { 'Content-Type': 'application/json' }
const companyArr = await getAllCompanies();
const selectInput = document.querySelector('#sectorSelect');
const companyList = document.querySelector('#companyList');
const pageHref = {
  login:    './src/pages/login/index.html',
  register: './src/pages/register/index.html',
  homePage: './index.html'
}

redirectHeaderBtn(pageHref);

if (companyList) {
  renderCards(companyList, companyArr);
  sectorSelect(selectInput);
  filterCompaniesBySector(selectInput, companyArr);
}

export { headers, pageHref, companyList, companyArr };