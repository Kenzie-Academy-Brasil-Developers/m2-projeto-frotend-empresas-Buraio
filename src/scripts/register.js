import { registerWithApi } from './adminPage/accountApi.js';

const form = document.querySelector('.formContainer');
const inputs = document.querySelectorAll('.inputData');

export function registerUser() {

  const [ name, email, password, expLevel ] = inputs;
  form.addEventListener('submit', async (e) => {

    e.preventDefault();
    const registerData = {};

    registerData.username = name.value;
    registerData.password = password.value;
    registerData.email = email.value;
    registerData.professional_level = expLevel.value;

    const account = await registerWithApi(registerData);
    if (!account.error) {
      location.replace('../login/index.html');
    }
  })
}

export { form, inputs };