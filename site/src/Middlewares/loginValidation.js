const { check } = require('express-validator');

module.exports = [
  check("user")
    .notEmpty().withMessage("Este campo es obligatorio").bail()
    .isEmail().withMessage("Ingresar un E-Mail válido").bail(),
  check("password")
    .notEmpty().withMessage("Ingresar una contraseña").bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
    .matches("[0-9]").withMessage("Contraseña incorrecta").bail()
    .matches("[A-Z]").withMessage("Contraseña incorrecta").bail(),
];