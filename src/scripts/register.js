import { registerWithApi } from './accountApi.js';

export function registerUser() {

  const form = document.querySelector('.formContainer');
  const inputs = document.querySelectorAll('.inputData');
  const [ name, email, password, expLevel ] = inputs;

  form.addEventListener('submit', async (e) => {

    e.preventDefault();
    const userData = {};

    userData.username = name.value;
    userData.password = password.value;
    userData.email = email.value;
    userData.professional_level = expLevel.value;

    const account = await registerWithApi(userData);
    if (!account.error) {
      location.replace('../login/index.html');
    }
  })
}