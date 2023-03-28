function redirectHeaderBtn(obj) {

  const btnArr = document.querySelectorAll('.redirect');

  btnArr.forEach(button => {

    button.addEventListener('click', (e) => {

      const btnInnerText = e.target.innerText;

      if (btnInnerText === 'Login') {
        location.assign(obj.login);
      }
      else if (btnInnerText === 'Cadastro') {
        location.assign(obj.register);
      }
      else if (btnInnerText === 'Home') {
        location.assign(obj.homePage);
      }
      else if (btnInnerText === 'Logout') {
        if (localStorage.getItem('token')) {
          localStorage.removeItem('token');
        }
        location.replace(obj.homePage);
      }
    })
  })
}

function validateToken() {

  if (!localStorage.getItem('token')) {
    location.replace('../../../index.html');
  }
  return JSON.parse(localStorage.getItem('token')).token;
}

export { redirectHeaderBtn, validateToken };