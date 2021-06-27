window.addEventListener('load', function () {

  let loginForm = document.querySelector('#log-form');
  let ul = document.querySelector('#err-front-validation-login');
  let user = document.querySelector('#user');
  let password = document.querySelector('#password');
  let err = [];

  loginForm.addEventListener('submit', function(e) {

    if (user.value == '') {
      err.push('Ingresar e-mail de usuario');
    } else if (user.value.length < 2) {
      err.push('El usuario debe contener al menos 2 caracteres');
    };

    if (password.value == '') {
      err.push('El campo de constraseña es obligatorio');
    };

    if (err.length > 0) {
      e.preventDefault();
      ul.innerHTML = '';
      err.forEach(oneError => ul.innerHTML += '<li>' + oneError + '</li>');
      err = [];
    };

  });
});