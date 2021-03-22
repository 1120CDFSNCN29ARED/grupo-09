const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ("path");

const productsController = require("../controllers/productsController");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/img/maps");
    },

    filename: function(req, file, cb){
        cb(null, file.originalname + " " + Date.now() + path.extname(file.originalname))
    },
});

const uploadFile = multer({storage});


// Listar productos
router.get('/', productsController.index);


// Crear productos
router.get('/create', productsController.createForm);
router.post("/create", uploadFile.single("image"), productsController.createNewProduct);

// Editar un producto
router.get('/edit/:id', productsController.edit);
router.patch("/:id", uploadFile.single("image"), productsController.update);

// Detalle de un producto
router.get('/:id', productsController.showProduct);

// Eliminar un producto
router.delete('/:id', productsController.delete);

module.exports = router;