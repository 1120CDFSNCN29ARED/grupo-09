const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController');

router.get("/", usersApiController.index);
router.get("/:id", usersApiController.profile);

module.exports = router;