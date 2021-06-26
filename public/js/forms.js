window.addEventListener("load", function(){
    
    let RegistrationForm = document.querySelector("#reg-form");
    let ul = document.querySelector("#err-front-validation");
    let names = document.querySelector("#names");
    let email = document.querySelector("#email");
    let address = document.querySelector("#address");
    let password = document.querySelector("#password");
    let err = [];
    let errorCheck = function(msg) {
        err.indexOf(msg) == -1 ? err.push(msg) : '';
    }

     RegistrationForm.addEventListener("submit", function(e){

         err = [];
         err.length == 0 ? ul.innerHTML = '' : '';

        if (names.value == ""){
            errorCheck("El campo de nombres debe completarse");
        } else if (names.value.length < 2) {
            errorCheck("El campo de nombres debe tener al menos 2 caracteres");
        };

        if (email.value == "") {
            errorCheck("Debe ingresar un e-mail");
        } else if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email.value)) {
            errorCheck("El e-mail no es válido");
        };

        if (address.value == ""){
            errorCheck("Debe ingresar una dirección");
        };

        if (password.value == "") {
            errorCheck("El campo de constraseña es obligatorio");
        }else if (password.value.length < 8) {
            errorCheck("La contraseña debe tener al menos 8 caracteres");
        };

        if (err.length > 0) {
            e.preventDefault();
            err.forEach( unError => ul.innerHTML += '<li>' + unError + '</li>');
        };    

    });    
});