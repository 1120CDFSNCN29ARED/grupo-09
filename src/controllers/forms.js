window.addEventListener("load", function(){
    let RegistrationForm = document.querySelector("form.registration-form");
    RegistrationForm.addEventListener("submit", function(e){


        let errores = []


        let campoNombre = document.querySelector("input.names");
        if (campoNombre.value == ""){
            errores.push("El campo de nombres debe completarse");
        }else if(campoNombre.value.lenght < 2){
            "El campo debe tener al menos 2 carcateres";
        }
        let campoEmail = document.querySelector("input.email");
        if (campoEmail.value == ""){
            errores.push("El campo de email debe estar completo");
        }else if (campo){
        }; 
        let campoDireccion = document.querySelector("input.adress");
        if (campoDireccion.value == ""){
            errores.push("el campo de direccion debe estar completo"); 
        }
        let campoConstrasenia = document.querySelector("input.password");
        if (campoConstrasenia.value = ""){
            errores.push("El campo de constrasenia es obligatorio");
        }else if (campoConstrasenia.value.lenght < 8) {
            errores.push("La contrasenia debe tener al menos 8 caracteres")
        }
        if (errores.length > 0){
            e.preventDefault();

            let ulerrores = document.querySelector("div.errores ul")
            for(let i = 0; i < errores.length; i ++){
                ulerrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    });
});