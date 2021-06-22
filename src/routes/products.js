const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/img/maps');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);
    },
});
const uploadFile = multer({storage});

// Listar productos
router.get('/', productsController.index);

// Crear productos
router.get('/create', productsController.createForm);
router.post('/create', uploadFile.single('image'), productsController.createNewProduct);

// Realizar búsqueda
router.get('/search', productsController.searchProduct);

//Formulario de edición de producto
router.get('/edit/:id', productsController.edit);

// Eliminar un producto
router.post('/:id', productsController.deleteProduct);

// Editar un producto
router.patch('/:id', uploadFile.single('image'), productsController.update);

// Detalle de un producto
router.get('/:id', productsController.showProduct);



module.exports = router;