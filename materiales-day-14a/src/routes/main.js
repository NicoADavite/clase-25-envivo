const express = require("express");
const router = express.Router();

const adminMiddleware = require("../middlewares/adminMiddleware");

const mainController = require("../controllers/mainController.js");

router.get("/", mainController.index);

router.get("/admin", adminMiddleware, mainController.admin);

module.exports = router;
