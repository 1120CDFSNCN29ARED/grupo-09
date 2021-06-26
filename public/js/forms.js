window.addEventListener("load", function () {

    let RegistrationForm = document.querySelector("#reg-form");
    let ul = document.querySelector("#err-front-validation");
    let names = document.querySelector("#names");
    let email = document.querySelector("#email");
    let address = document.querySelector("#address");
    let password = document.querySelector("#password");
    let err = [];

    RegistrationForm.addEventListener("submit", function (e) {

        if (names.value == "") {
            err.push("El campo de nombres debe completarse");
        } else if (names.value.length < 2) {
            err.push("El campo de nombres debe tener al menos 2 caracteres");
        };
        
        if (email.value == "") {
            err.push("Debe ingresar un e-mail");
        } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value)) {
            err.push("El e-mail no es válido");
        };
        
        if (address.value == "") {
            err.push("Debe ingresar una dirección");
        };
        
        if (password.value == "") {
            err.push("El campo de constraseña es obligatorio");
        } else if (password.value.length < 8) {
            err.push("La contraseña debe tener al menos 8 caracteres");
        };       
        
        if (err.length > 0) {
            e.preventDefault();
            ul.innerHTML = '';
            err.forEach(oneError => ul.innerHTML += '<li>' + oneError + '</li>');
            err = [];
        };

    });
});