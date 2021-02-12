const express = require('express');
const router = express.Router();
const registrationController = require("../controllers/registrationController");

router.get('/registration', registrationController.index);

module.exports = router;