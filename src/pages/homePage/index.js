import { redirectHeaderBtn } from "../../scripts/redirect.js";

const headers = { 'Content-Type': 'application/json' }
const pageHref = {
  login:    './src/pages/login/index.html',
  register: './src/pages/register/index.html',
  homePage: './index.html'
}

redirectHeaderBtn(pageHref);

export { headers, pageHref };