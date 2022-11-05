import { form, inputs } from "./register.js";
import { loginWithApi, verifyAdmin } from './adminPage/accountApi.js';

export function loginUser() {

  const [ email, password ] = inputs;
  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const loginData = {};
    loginData.email = email.value;
    loginData.password = password.value;

    const token = await loginWithApi(loginData);
    console.log(token)

    if (!token.error) {
      localStorage.setItem('token', JSON.stringify(token));
  
      const accountType = await verifyAdmin(token.token);
  
      console.log(accountType)
  
      if (accountType.is_admin === true) {
        location.replace('../adminPage/index.html');
      }
      else {
        location.replace('../userPage/index.html');
      }
    }
  })
};