window.addEventListener("load", function(){
    let RegistrationForm = document.querySelector(".registration-form");
    let ulerrores = document.querySelector("#errores-front-validation");
    let button = document.querySelector("#create-account-button");
    let errores = [];
    let ulContent = ulerrores.innerHTML;

    RegistrationForm.addEventListener("submit", function(e){

        let campoNombre = document.querySelector("#names");
        if (!campoNombre.value){
            errores.push("El campo de nombres debe completarse");
        }else if(campoNombre.value.length < 2){
            errores.push("El campo debe tener al menos 2 caracteres");
        };

        let campoEmail = document.querySelector("#email");
        if (campoEmail.value == ""){
            errores.push("El campo de email debe estar completo");
        } else if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/.test(campoEmail.value) == false) {
            errores.push("El campo de email no es válido");
        };

        let campoDireccion = document.querySelector("#address");
        if (campoDireccion.value == ""){
            errores.push("El campo de dirección debe estar completo"); 
        }
        let campoConstrasenia = document.querySelector("#password");
        if (campoConstrasenia.value = ""){
            errores.push("El campo de constrasenia es obligatorio");
        }else if (campoConstrasenia.value.lenght < 8) {
            errores.push("La contrasenia debe tener al menos 8 caracteres")
        }
        ulerrores.innerHTML = "";
        if (errores.length > 0){
            e.preventDefault();
            for(let i = 0; i < errores.length; i ++){
                ulerrores.innerHTML += "<li>" + errores[i] + "</li>";
            }

        }
        
    });
});