const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('names')
        .notEmpty().withMessage('Ingresar nombre completo').bail()
        .isLength({min:9}).withMessage('Debe contener al menos 2 caracteres').bail(),
        
    check('email')
        .notEmpty().withMessage('Ingresar una dirección de e-mail').bail()
        .isEmail().withMessage('Ingresar un e-mail válido').bail()
        .custom((value, { req }) => {
            return new Promise((resolve, reject) => {
                User.findOne({ email: req.body.email }, function (err, user) {
                    if (Boolean(user)) {
                        reject(new Error('El E-mail pertenece a un usuario ya registrado'))
                    }
                    resolve(true)
                });
            });
        }),
    
    check('address', 'Ingresar una dirección').notEmpty(),
    
    check('password')
        .trim().escape()
        .notEmpty().withMessage('Ingresar una contraseña').bail()
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