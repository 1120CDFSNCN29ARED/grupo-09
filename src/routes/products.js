const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get('/', productsController.index);

// Editar un producto
router.get('/edit/:id', productsController.edit);
router.patch('/:id', productsController.update);

// Eliminar un producto
router.delete('/:id', productsController.delete);

module.exports = router;