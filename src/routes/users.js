const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const loginValidation = require('../Middlewares/loginValidation');
const registrationValidation = require('../Middlewares/registrationValidation');
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

router.get("/login", usersController.loginForm);
router.get("/register", usersController.registrationForm);
router.get("/", usersController.index);
router.post("/register", uploadFile.single("image"), registrationValidation, usersController.registration);
router.post('/login', loginValidation, usersController.login);
router.get('/profile', usersController.profile);

module.exports = router;
