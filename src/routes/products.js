const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController");

// Listar productos
router.get('/', productsController.index);

// Detalle de un producto
router.get('/:id', productsController.showProduct);

// Crear productos
router.get('/create', productsController.createForm);
router.post("/", productsController.createNewProduct);

// Editar un producto
router.get('/edit/:id', productsController.edit);
router.patch('/:id', productsController.update);

// Eliminar un producto
router.delete('/:id', productsController.delete);

module.exports = router;