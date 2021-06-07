const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const loginValidation = require('../middlewares/loginValidation');
const registrationValidation = require('../middlewares/registrationValidation');
const usersController = require("../controllers/usersController");
const guestMiddleware = require("../middlewares/guestMiddelware");
const authMiddleware = require("../middlewares/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img/users");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const uploadFile = multer({ storage });

router.get("/login", guestMiddleware, usersController.loginForm);
router.get("/logout", authMiddleware, usersController.logout);
router.get("/register", guestMiddleware, usersController.registrationForm);
router.get("/", usersController.index);
router.post("/register", uploadFile.single("image"), registrationValidation, usersController.registration);
router.post('/login', loginValidation, usersController.login);
router.get("/profile", authMiddleware, usersController.profile);

module.exports = router;
