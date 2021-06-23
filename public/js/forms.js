window.addEventListener("load", function(){
    
    let RegistrationForm = document.querySelector(".registration-form");
    let ulerrores = document.querySelector("#errores-front-validation");
    let campoNombre = document.querySelector("#names");
    let campoEmail = document.querySelector("#email");
    let campoDireccion = document.querySelector("#address");
    let campoConstrasenia = document.querySelector("#password");
    let errores = [];
    let erroresCheck = function(msg) {
        errores.indexOf(msg) == -1 ? errores.push(msg) : '';
    }
     RegistrationForm.addEventListener("submit", function(e){
        console.log("ERR!!!", errores)
         errores = [];
        if (campoNombre.value == ""){
            erroresCheck("El campo de nombres debe completarse");
        }else if(campoNombre.value.length < 2){
            erroresCheck("El campo de nombres debe tener al menos 2 caracteres");
        };
        if (campoEmail.value == ""){
            erroresCheck("Debe ingresar un e-mail");
        } else if (!(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/.test(campoEmail.value))) {
            erroresCheck("El e-mail no es válido");
        };

        if (campoDireccion.value == ""){
            erroresCheck("Debe ingresar una dirección");
        }

        if (campoConstrasenia.value == ""){
            erroresCheck("El campo de constraseña es obligatorio");
        }else if (campoConstrasenia.value.length < 8) {
            erroresCheck("La contraseña debe tener al menos 8 caracteres");
        }

        if (errores.length > 0){
            e.preventDefault();
            errores.map( unError => ulerrores.innerHTML += '<li>' + unError + '</li>');
        } 
        
        
    }
    
    );
    
});