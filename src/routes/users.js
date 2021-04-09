const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const middlewareLogin = require('../Middlewares/loginValidation');
const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadFile = multer({ storage });

router.get("/login", middlewareLogin, usersController.loginForm);
router.get("/register", usersController.registrationForm);
router.get("/", usersController.index);
router.post("/", uploadFile.single("image"), usersController.registration);

module.exports = router;
