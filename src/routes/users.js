const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/login", usersController.index);
router.get("/register", usersController.index);

module.exports = router;
