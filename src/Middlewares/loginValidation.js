const { check } = require('express-validator');

module.exports = [
  check("user").notEmpty().withMessage("Este campo es obligatorio").bail(),
  check("user", "Ingresar un E-Mail válido").isEmail().bail(),
  check("password", "Ingresar una contraseña")
    .isLength({ min: 8 })
    .bail()
    .matches("[0-9]")
    .withMessage("Contraseña incorrecta")
    .bail()
    .matches("[A-Z]")
    .withMessage("Contraseña incorrecta")
    .bail(),
];