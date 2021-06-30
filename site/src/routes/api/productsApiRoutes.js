const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/', productsApiController.index);
router.get('/img/:id', productsApiController.image);
router.get('/:id', productsApiController.productDetail);

module.exports = router;