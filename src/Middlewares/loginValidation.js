const { check } = require('express-validator');

module.exports=  [
        check('user')
        .not()
        .isEmpty()
        .withMessage('Este campo es obligatorio').bail(),
        check('user', 'Ingresar un E-Mail válido')
        .isEmail().bail(),
        check('password', 'Ingresar una contraseña')
        .isLength({ min: 8 }).bail()
        .matches('[0-9]').withMessage('Debe contener al menos 1 número').bail()
        .matches('[A-Z]').withMessage('Debe contener al menos una letra mayúscula').bail(),
    ];