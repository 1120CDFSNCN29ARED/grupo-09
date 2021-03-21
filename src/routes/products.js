const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/img/maps");
    },

    filename: function(req, file, cb){
        cb(null, file.originalname + " " + Date.now() + path.extname(file.originalname))
    },
});

const uploadFile = multer({storage});

const productsController = require("../controllers/productsController");

// Listar productos
router.get('/', productsController.index);

// Detalle de un producto
router.get('/:id', productsController.showProduct);

// Crear productos
router.get('/create', productsController.createForm);
router.post("/create", uploadFile.single("image"), productsController.createNewProduct);


// Editar un producto
router.get('/edit/:id', productsController.edit);
router.patch("/:id", uploadFile.single("image"), productsController.update);

// Eliminar un producto
router.delete('/:id', productsController.delete);

module.exports = router;