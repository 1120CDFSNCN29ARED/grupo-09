window.addEventListener('load', function () {

  let productsForms = document.querySelector('.product-form');
  let ul = document.querySelector('.err-front-validation-prods');
  let name = document.querySelector('#name');
  let description = document.querySelector('#description');

  let image = document.querySelector('#image');
  let imageData = image.value;
  let imageExt = '';
  
  let err = [];

  productsForms.addEventListener('submit', function (e) {

    if (name.value == '') {
      err.push('El campo de nombre es obligatorio');
    } else if (name.value.length < 5) {
      err.push('El nombre debe contener al menos 5 caracteres');
    };

    if (description.value.length < 20) {
      err.push('La descripción debe contener al menos 20 caracteres');
    };

    if (imageData == '') {
      err.push('Elegir un archivo de imagen');
    } else {
      imageExt = imageData.substring(imageData.lastIndexOf('.') + 1).toLowerCase();
      if (imageExt != 'gif' && imageExt != 'png' && imageExt != 'jpg' && imageExt != 'jpeg') {
        err.push('Formato de imágen inválido');
      };
    };

    if (err.length > 0) {
      e.preventDefault();
      ul.innerHTML = '';
      err.forEach(oneError => ul.innerHTML += '<li>' + oneError + '</li>');
      err = [];
    };

  });
});