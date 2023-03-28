import { form, inputs } from "./register.js";
import { loginWithApi, verifyAdmin } from './adminPage/accountApi.js';

export function loginUser() {

  const [ email, password ] = inputs;
  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const loginData = {};
    loginData.email = email.value;
    loginData.password = password.value;

    const loginToken = await loginWithApi(loginData);

    if (!loginToken.error) {
      localStorage.setItem('token', JSON.stringify(loginToken));
  
      const accountType = await verifyAdmin(loginToken.token);
  
      if (accountType.is_admin === true) {
        location.replace('../adminPage/index.html');
      }
      else {
        location.replace('../userPage/index.html');
      }
    }
  })
};