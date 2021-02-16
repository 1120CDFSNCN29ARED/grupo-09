const express = require('express');
const router = express.Router();
const createProductController = require("../controllers/createProductController");

router.get('/', createProductController.index);

module.exports = router;