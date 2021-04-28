const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('names', 'Ingresar nombre completo').notEmpty(),
    
    check('email')
        .notEmpty().withMessage('Ingresar una dirección de e-mail').bail()
        .isEmail().withMessage('Ingresar un e-mail válido').bail(),
    
    check('address', 'Ingresar una dirección').notEmpty(),
    
    check('password')
        .trim().escape()
        .isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres').bail()
        .matches('[0-9]').withMessage('Debe contener al menos 1 número').bail()
        .matches('[A-Z]').withMessage('Debe contener al menos una letra mayúscula').bail(),
    
    check('confirmPassword').custom( (value, {req}) => {
        let password = req.body.password;
        if (value != password) {
            throw new Error('Las contraseñas no coinciden');
        }
        return true;
    }),
    
    
    check('image').custom( (value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
            throw new Error('Elegir imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Archivos permitidos: ${acceptedExtensions.join(', ' )}`);
            }
        }
        return true;
    }),
];