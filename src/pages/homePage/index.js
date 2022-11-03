import { getAllCompanies } from "../../scripts/homePageApi.js";
import { sectorSelect, filterCompaniesBySector } from "../../scripts/homePage.js";
import { redirectHeaderBtn } from "../../scripts/redirect.js";

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
  renderCompanyCards(companyList, companyArr);
  sectorSelect(selectInput);
  filterCompaniesBySector(selectInput, companyArr);
}

export { headers, pageHref };