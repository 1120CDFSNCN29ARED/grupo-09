const path = require('path');
const { check } = require('express-validator');

module.exports = [
  check('name')
    .notEmpty().withMessage('Ingresar nombre de nuevo mapa').bail()
    .isLength({ min: 5 }).withMessage('Debe contener al menos 5 caracteres').bail(),

  check('description')
    .isLength({ min: 20 }).withMessage('Debe contener al menos 20 caracteres').bail(),

  check('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    if (!file) {
      throw new Error('Elegir imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Archivos permitidos: ${acceptedExtensions.join(', ')}`);
      }
    }
    return true;
  }),

  check('price')
    .notEmpty().withMessage('Ingresar precio').bail()
    .isInt({ gt: 1 }, { allow_leading_zeroes: false }).withMessage('Precio inválido').bail(),
];